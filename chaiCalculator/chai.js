/**
 * Calculates the basic ingredients needed to make a specific number of cups of Kenyan chai.
 * Prompts the user for the number of cups and prints the ingredient list to the console.
 */
function calculateChaiIngredients() {
  // Define the standard recipe for 1 cup
  const standardRecipe = {
    water: 200, // ml
    milk: 50, // ml
    teaLeaves: 1, // tablespoon
    sugar: 2, // teaspoons
  };

  // Prompt the user for the number of cups
  let numberOfCupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");

  // Convert the input to a number
  let numberOfCups = parseFloat(numberOfCupsInput);

  // Validate the input
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Invalid input. Please enter a positive number for the cups of chai.");
    return;
  }

  // Calculate the required amount for each ingredient
  const waterNeeded = numberOfCups * standardRecipe.water;
  const milkNeeded = numberOfCups * standardRecipe.milk;
  const teaLeavesNeeded = numberOfCups * standardRecipe.teaLeaves;
  const sugarNeeded = numberOfCups * standardRecipe.sugar;

  // Print the results to the console
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${waterNeeded} ml`);
  console.log(`Milk: ${milkNeeded} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeavesNeeded} tablespoons`);
  console.log(`Sugar (Sukari): ${sugarNeeded} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");
}

// To run this function, you would call it:
// calculateChaiIngredients();