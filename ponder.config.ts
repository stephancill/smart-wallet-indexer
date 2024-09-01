import { createConfig } from "@ponder/core";
import { http } from "viem";

import { SmartWalletAbi } from "./abis/SmartWalletAbi";

export default createConfig({
  networks: {
    optimism: {
      chainId: 10,
      transport: http(process.env.PONDER_RPC_URL_10),
    },
  },
  contracts: {
    SmartWallet: {
      network: "optimism",
      abi: SmartWalletAbi,
      startBlock: 121124906, //13514407,
    },
  },
});
