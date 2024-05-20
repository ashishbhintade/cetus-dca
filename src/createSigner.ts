import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

export function createSigner() {
	const mnemonics = process.env.MNEMONICS;

	if (!mnemonics) {
		throw new Error("Mnemonics Not Found");
	}

	return Ed25519Keypair.deriveKeypair(mnemonics);
}
