import { ethers } from "ethers";
import React from "react";

export const AccountContext = React.createContext({
  provider: null,
  signer: null,
  connectWallet: () => {},
  closeConnection: () => {},
  account: "",
  connected: false,
  loading: false,
});
