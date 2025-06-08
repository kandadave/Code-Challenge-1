Boda Fare Calculator
This simple JavaScript function estimates the fare for a boda boda (motorcycle taxi) ride based on the distance traveled. It prompts the user for the trip distance in kilometers and then calculates and displays the estimated cost.

How it Works
The calculateBodaFare() function applies a straightforward fare structure:

Base Fare: A fixed initial charge.
Charge per Kilometer: An additional cost for each kilometer traveled.
The function takes the user's input for distance, validates it, and then calculates the total fare by adding the base fare to the distance multiplied by the charge per kilometer.

Usage
To use this function:

Save the Code: Save the provided JavaScript code into an HTML file within <script> tags, or in a .js file linked to an HTML file.
Run in Browser: Open the HTML file in a web browser.
Call the Function: Open your browser's developer console (usually by pressing F12) and type calculateBodaFare() then press Enter.
You will be prompted to enter the distance in kilometers. After you input the distance, the estimated fare will be displayed in the console.

Example
Unafika wapi Mkubwa? Kilometer ngapi?: 5
Output in Console:

Uko kwote? Io ni 5 km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES 75
Total: KES 125

Panda Pikipiki!
Customization
You can easily modify the fare rules by changing the values of baseFare and chargePerKm within the calculateBodaFare() function:

JavaScript

const baseFare = 50; // KES - Change this value for a different base fare
const chargePerKm = 15; // KES per kilometer - Change this value for a different per-kilometer charge
