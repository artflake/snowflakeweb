// web3 slice
import { createSlice } from "@reduxjs/toolkit";

interface Web3Slice {
  address: string;
  network: number;
  onboard: any;
  provider: any;
  signer: any;
  wallet: any;
}

const initialState: Web3Slice = {
  address: "",
  network: 1,
  onboard: null,
  provider: null,
  signer: null,
  wallet: null,
};

export const web3Slice = createSlice({
  name: "web3",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setNetwork: (state, action) => {
      state.network = action.payload;
    },
    setOnboard: (state, action) => {
      console.log("onboard action", action.payload);
      state.onboard = action.payload;
    },
    setProvider: (state, action) => {
      state.provider = action.payload;
    },
    setSigner: (state, action) => {
      state.signer = action.payload;
    },
    setWallet: (state, action) => {
      state.wallet = action.payload;
    },
  },
});

export const {
  setAddress,
  setNetwork,
  setOnboard,
  setProvider,
  setSigner,
  setWallet,
} = web3Slice.actions;
