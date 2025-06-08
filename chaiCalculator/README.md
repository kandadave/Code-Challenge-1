Kenyan Chai Ingredient Calculator
This JavaScript function helps you figure out the basic ingredients needed to make a specific number of cups of delicious Kenyan chai. Just tell it how many cups you want, and it'll give you a simple ingredient list!

How It Works
The calculateChaiIngredients() function uses a standard recipe for one cup of chai and then scales the ingredients based on your desired number of cups. Here's what it considers for a single cup:

Water: 200 ml
Milk: 50 ml
Tea Leaves (Majani): 1 tablespoon
Sugar (Sukari): 2 teaspoons
The function prompts you for the number of cups, validates your input to ensure it's a positive number, and then calculates the total amount for each ingredient before displaying it in your console.

How to Use
It's super easy to get your ingredient list!

Save the Code: Save the provided JavaScript code. You can put it directly into an HTML file within <script> tags, or save it as a .js file and link it to your HTML.
Open in Browser: Open your HTML file in any web browser.
Run the Function: Open your browser's developer console (you can usually do this by pressing F12). Then, type calculateChaiIngredients() and hit Enter.
A prompt will appear asking you how many cups of chai you'd like. Enter your desired number, and the ingredient list will pop up in the console.

Example
Let's say you want to make 3 cups of chai.

Karibu! How many cups of Chai Bora would you like to make?: 3
Output in Console:

To make 3 cups of Kenyan Chai, you will need:
Water: 600 ml
Milk: 150 ml
Tea Leaves (Majani): 3 tablespoons
Sugar (Sukari): 6 teaspoons

Enjoy your Chai Bora!
Customization
Feel free to tweak the standard recipe to match your personal chai preferences! You can change the ingredient amounts directly within the standardRecipe object in the code:

JavaScript

const standardRecipe = {
  water: 200, // ml - Adjust water per cup
  milk: 50, // ml - Adjust milk per cup
  teaLeaves: 1, // tablespoon - Adjust tea leaves per cup
  sugar: 2, // teaspoons - Adjust sugar per cup
};
