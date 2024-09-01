import { ponder } from "@/generated";

function getOwnerId(ownerPublicKey: string, walletAddress: string) {
  return `${ownerPublicKey}-${walletAddress}`;
}

ponder.on("SmartWallet:AddOwner", async ({ event, context }) => {
  const { SmartWalletOwner } = context.db;
  const walletAddress = event.log.address;
  const owner = event.args.owner;

  await SmartWalletOwner.create({
    id: getOwnerId(owner, walletAddress),
    data: {
      publicKey: owner,
      walletAddress: walletAddress,
    },
  });
});

ponder.on("SmartWallet:RemoveOwner", async ({ event, context }) => {
  const { SmartWalletOwner } = context.db;
  const walletAddress = event.log.address;
  const owner = event.args.owner;

  await SmartWalletOwner.delete({
    id: getOwnerId(owner, walletAddress),
  });
});
