/**
 * Estimates the transaction fee based on a 1.5% rate, with
 * a minimum fee of KES 10 and a maximum fee of KES 70.
 * Prompts the user for the amount to send and prints the fee details to the console.
 */
function estimateTransactionFee() {
  const FEE_PERCENTAGE = 0.015; // 1.5% as a decimal
  const MIN_FEE = 10; // KES
  const MAX_FEE = 70; // KES

  // Prompt the user for the amount to send
  let amountInput = prompt("Unatuma Ngapi? (KES):");

  // Convert the input to a number
  let amountToSend = parseFloat(amountInput);

  // Validate the input
  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Invalid input. Please enter a positive number for the amount you wish to send.");
    return;
  }

  // Calculate the raw transaction fee (1.5% of the amount)
  let calculatedFee = amountToSend * FEE_PERCENTAGE;

  // Apply minimum and maximum fee limits
  // Using Math.max ensures the fee is at least MIN_FEE
  // Using Math.min then ensures the fee is at most MAX_FEE
  let finalFee = Math.max(MIN_FEE, Math.min(MAX_FEE, calculatedFee));

  // Calculate the total amount to be debited
  const totalDebitedAmount = amountToSend + finalFee;

  // Print the results to the console
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${finalFee}`);
  console.log(`Total amount to be debited: KES ${totalDebitedAmount}`);
  console.log("Send Money Securely!");
}

// To run this function, you would call it:
// estimateTransactionFee();