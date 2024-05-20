import { Agenda } from "@hokify/agenda";
import { trade } from "./trade";

async function main() {
	console.log(`[${new Date().toLocaleString()}] App Started`);
	const URI = process.env.MONGODB_CONN;

	if (!URI) {
		throw new Error("MongoDB Connection URI not found");
	}

	const agenda = new Agenda({ db: { address: URI } });

	agenda.define("hello agenda", async () => {
		// console.log(`[${new Date().toLocaleString()}] Hello Agenda!`);
		await trade(
			"0x8581097ba4ffe7e8cfed6146bd536cde5d08d0f94021fded8b62803922c824bf",
			false,
			true,
			1000000,
			5
		);
	});

	agenda.every("5 seconds", "hello agenda");

	await agenda.start();

	setTimeout(async () => {
		console.log("Stop Task");
		await agenda.cancel({ name: "hello agenda" });
		await agenda.stop();

		// stop the process
		process.exit(0);
	}, 10000);
}

main().catch(console.error);
