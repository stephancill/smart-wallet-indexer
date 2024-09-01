import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  SmartWalletOwner: p.createTable({
    id: p.string(),
    publicKey: p.string(),
    walletAddress: p.string(),
  }),
}));
