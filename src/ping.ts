import { MongoClient } from "mongodb";

async function main() {
	// get MONGODB_CONN from .env file
	const URI = process.env.MONGODB_CONN;

	if (!URI) {
		throw new Error("MongoDB Connection URI not found");
	}

	const client = new MongoClient(URI);

	try {
		await client.connect();

		await client.db("admin").command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

main();
