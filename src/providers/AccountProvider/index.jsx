import React, { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { AccountContext } from "./AccountContext";
import { toast } from "material-react-toastify";
import WalletConnectProvider from "@walletconnect/web3-provider";

export { AccountContext };

const networks = {
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: [
      "https://bsc-dataseed1.binance.org/",
      "https://bsc-dataseed2.binance.org/",
      "https://bsc-dataseed3.binance.org/",
      "https://bsc-dataseed4.binance.org/",
    ],
    blockExplorerUrls: ["https://bscscan.com/"],
  },
};

const providerOptions = {
  /* See Provider Options Section */
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: "https://bsc-dataseed.binance.org/",
      },
      network: "binance",
      chainId: 56,
    },
  },
  injected: {
    package: null,
    options: {
      chainId: 56,
    },
  },
};

const web3Modal = new Web3Modal({
  network: "binance",
  cacheProvider: false,
  providerOptions,
  theme: "dark",
});

export function AccountProvider({ children }) {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState(null);

  const connectWallet = useCallback(() => {
    if (loading || connected) return;
    const showErrorToast = () =>
      toast.error(
        "Something went wrong while connecting " +
          "your walet. Please try again"
      );

    setLoading(true);
    web3Modal
      .connect()
      .catch((error) => {
        showErrorToast();
        console.error("Error connecting wallet", error);
      })
      .then(async (instance) => {
        const switchNetworkBsc = async () => {
          try {
            await instance.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: networks.bsc.chainId }],
            });
          } catch (error) {
            if (error.code === 4902) {
              await instance.request({
                method: "wallet_addEthereumChain",
                params: [networks.bsc],
              });
            } else {
              throw error;
            }
          }
        };
        let provider = new ethers.providers.Web3Provider(instance);

        let network = await provider.getNetwork();
        if (network.chainId !== networks.bsc.chainId && network.chainId != 56) {
          await switchNetworkBsc();
        }
        provider = new ethers.providers.Web3Provider(instance);
        // // If it's still not BSC
        network = await provider.getNetwork();
        if (network.chainId !== networks.bsc.chainId && network.chainId != 56) {
          throw Error("Invalid network");
        }

        const accounts = await provider.listAccounts();
        const account = accounts[0];
        const signer = provider.getSigner();
        const message =
          "Please sign this message to continue to use Detangled World";
        const signature = await signer.signMessage(message);
        if (account !== ethers.utils.verifyMessage(message, signature)) {
          throw Error("Invalid user signature");
        }

        setAccount(account);
        setProvider(provider);
        setSigner(signer);
        setConnected(true);
      })
      .catch((error) => {
        showErrorToast();
        console.error("Error connecting wallet", error);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  const closeConnection = useCallback(() => {
    setAccount(null);
    setConnected(false);
    setProvider(null);
    setSigner(null);
  });

  // to handle changes later
  useEffect(() => {
    provider?.on("chainChanged", closeConnection);
    provider?.on("accountsChanged", closeConnection);
    

    return () => {
      provider?.off("chainChanged", closeConnection);
      provider?.off("accountsChanged", closeConnection);
    };
  }, [provider]);

  return (
    <AccountContext.Provider
      value={{
        provider,
        signer,
        connected,
        loading,
        connectWallet,
        closeConnection,
        account,
      }}>
      {children}
    </AccountContext.Provider>
  );
}
