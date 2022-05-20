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
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: [
      "https://rpc-mainnet.matic.quiknode.pro/",
      "https://rpc-mainnet.matic.network/",
      "https://rpc-mainnet.maticvigil.com/",
      "https://polygon-rpc.com/",
    ],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
};

function isEqualNumber(a, b) {
  return Number.parseInt(a.toString()) === Number.parseInt(b.toString());
}

const providerOptions = {
  /* See Provider Options Section */
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        137: "https://polygon-rpc.com/",
      },
      network: "polygon",
      chainId: 137,
    },
  },
  injected: {
    package: null,
    options: {
      chainId: 137,
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
        const switchNetworkPolygon = async () => {
          try {
            await instance.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: networks.polygon.chainId }],
            });
          } catch (error) {
            if (error.code === 4902) {
              await instance.request({
                method: "wallet_addEthereumChain",
                params: [networks.polygon],
              });
            } else {
              throw error;
            }
          }
        };
        let provider = new ethers.providers.Web3Provider(instance);

        let network = await provider.getNetwork();
        if (!isEqualNumber(network.chainId, networks.polygon.chainId)) {
          await switchNetworkPolygon();
        }
        provider = new ethers.providers.Web3Provider(instance);
        // // If it's still not polygon
        network = await provider.getNetwork();
        if (!isEqualNumber(network.chainId, networks.polygon.chainId)) {
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
