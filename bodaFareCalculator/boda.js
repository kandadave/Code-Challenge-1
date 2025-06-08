/**
 * Calculates the estimated fare for a boda boda ride based on distance.
 * Prompts the user for the trip distance and prints the estimated fare to the console.
 */
function calculateBodaFare() {
  // Define fare rules
  const baseFare = 50; // KES
  const chargePerKm = 15; // KES per kilometer

  // Prompt the user for the distance
  let distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

  // Convert the input to a number
  let distanceInKm = parseFloat(distanceInput);

  // Validate the input
  if (isNaN(distanceInKm) || distanceInKm < 0) {
    console.log("Input is invalid. Please enter a valid distance in kilometers (a positive number).");
    return;
  }

  // Calculate the total estimated fare
  const totalFare = baseFare + (distanceInKm * chargePerKm);
  const perKmCost = distanceInKm * chargePerKm; // To show the breakdown

  // Print the results to the console in a user-friendly format
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${perKmCost}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");
}

// To run this function, you would call it:
// calculateBodaFare();