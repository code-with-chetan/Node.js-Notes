import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = `52c452be8d02af70a73d89a7`;
const url = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

https.get(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;
    console.log(rates);

    rl.question("Enter the amount in USD:", (amount) => {
      rl.question("Enter the target currency (e.g.INR,EUR,NPR)", (currency) => {
        const rate = rates[currency.toUpperCase()];
        console.log(
          `${amount} USD is approximately ${amount * rate} ${currency}`
        );
      });
    });
  });
});
