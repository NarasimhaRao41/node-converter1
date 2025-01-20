const prompt = require("prompt-sync")({ sigint: true }); // Import prompt-sync

function displayMenu() {
  console.log("\nCurrency Converter");
  console.log("1. Convert USD to INR");
  console.log("2. Convert INR to USD");
  console.log("3. Exit");
}

function convertUsdToInr(usd) {
  const fixedRate = 82.5; // Fixed conversion rate: 1 USD = 82.5 INR
  return usd * fixedRate;
}

function convertInrToUsd(inr) {
  const fixedRate = 82.5; // Fixed conversion rate: 1 USD = 82.5 INR
  return inr / fixedRate;
}

function main() {
  let steps = 0; // To count the number of steps
  let keepRunning = true;

  while (keepRunning) {
    steps++;
    displayMenu();

    // Get user input
    const choice = prompt("Enter your choice (1/2/3): ");

    switch (choice) {
      case "1": {
        const usd = parseFloat(prompt("Enter amount in USD: "));
        if (isNaN(usd) || usd < 0) {
          console.log("Invalid input. Please enter a positive numeric value.");
          break;
        }
        const inr = convertUsdToInr(usd);
        console.log(`${usd} USD is equal to ${inr.toFixed(2)} INR`);
        break;
      }
      case "2": {
        const inr = parseFloat(prompt("Enter amount in INR: "));
        if (isNaN(inr) || inr < 0) {
          console.log("Invalid input. Please enter a positive numeric value.");
          break;
        }
        const usd = convertInrToUsd(inr);
        console.log(`${inr} INR is equal to ${usd.toFixed(2)} USD`);
        break;
      }
      case "3":
        console.log(`Exiting the program after ${steps} steps. Goodbye!`);
        keepRunning = false;
        break;
      default:
        console.log("Invalid choice. Please try again.");
    }
  }
}

// Run the main function
main();
