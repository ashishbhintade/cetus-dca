# Cetus DCA

Bot that allows to execute a Dollar Cost Averaging (DCA) strategy on the Cetus DEX, built with the Cetus SDK. 

> [!WARNING]
> **Please note that this bot is still in development and is not ready for production use.**.

## Motivation

This project is one of the most interesting ideas I've wanted to build, and it has a practical real-world use case. Additionally, it serves several other objectives:

-   Learning Sui
-   Exploring how Agenda works

## Tech Stack

-   TypeScript
-   Agenda: Job Scheduling Library
-   MongoDB: Dependency for Agenda
-   Cetus SDK: To trade on Cetus CLMM DEX
-   Sui.js: Library to interact with Sui blockchain

## Installation

1. Clone the repo:

```bash
git clone LINK_OF_THIS_REPO
```

2. Install dependencies:

```bash
# with npm
npm install

# with yarn
yarn
```

3. Create `.env` file:

```bash
mv .env.example .env
```

4. Add the following environment variables to the .env file:

-   MongoDB connection URI
-   Seed phrase of your trading wallet

## Usage

After completing the steps mentioned earlier, you need to make some changes to the `src/index.ts` file. Begin by updating the values in the trade function as follows:

```ts
await trade(
	"0x8581097ba4ffe7e8cfed6146bd536cde5d08d0f94021fded8b62803922c824bf", // Address of the pool you want to trade on
	false, // Indicates which asset to swap: true for A to B, false for B to A
	true, // Indicates if the given amount is a buy amount or sell amount
	1000000, // Amount of tokens (keep the token's decimal in mind, e.g., for SUI has 9 decimals, 1 SUI should be passed as 1000000000)
	5 // Slippage value for the trade
);

// ...

agenda.every("5 seconds", "start dca"); // Trade interval - this will execute the trade every 5 seconds

// ...

setTimeout(async () => {
	// ...
}, 10000); // Adjust the time based on the number of trades you want to execute. For example, with a 10-second duration and a 5-second interval, 2 trades will be executed.
```

Additionally, before starting the application, create a trades folder to store the details of each trade.

Finally, to run the application, execute the following command:

```bash
npm run dev
# or
yarn dev
```

## Next Steps

-   [ ] Enable the app to support multiple DCA strategies simultaneously
-   [ ] Introduce randomness to trade execution, allowing for a variance of a few seconds (+/-) around the scheduled time.
-   [ ] Create a guide to help users find the pool they need.
