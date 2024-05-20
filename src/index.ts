import { Agenda } from "@hokify/agenda";

async function main() {
    console.log(`[${new Date().toLocaleString()}] App Started`)
	const URI = process.env.MONGODB_CONN;

	if (!URI) {
		throw new Error("MongoDB Connection URI not found");
	}

	const agenda = new Agenda({ db: { address: URI } });

	agenda.define("hello agenda", async () => {
		console.log(`[${new Date().toLocaleString()}] Hello Agenda!`);
	});

	agenda.every("5 seconds", "hello agenda");

	await agenda.start();

	setTimeout(async () => {
		console.log("Stop Task");
        await agenda.cancel({name: 'hello agenda'})
		await agenda.stop();

        // stop the process
        process.exit(0);
	}, 60000);
}

main().catch(console.error);
