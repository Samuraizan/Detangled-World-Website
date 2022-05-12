import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AccountContext } from "../../providers/AccountProvider";

export const ConnectWalletButton = ({ className }) => {
  const { connectWallet, connected, loading, account } =
    useContext(AccountContext);
  const formatAccount = (account = "") => {
    return account.substring(0, 6) + "..." + account.substring(38);
  };
  return (
    <button
      type='button'
      className={
        "btn mb-3 mr-3 btn-secondary" + (className ? " " + className : "")
      }
      onClick={connected || loading ? null : connectWallet}>
      {connected
        ? formatAccount(account)
        : loading
        ? "Loading ..."
        : "Connect Wallet"}
    </button>
  );
};
