Transaction Fee Estimator
This JavaScript function helps you estimate the transaction fee for sending money, applying a rate of 1.5% with defined minimum and maximum limits. It's a handy tool to quickly see how much a transaction might cost you.

How It Works
The estimateTransactionFee() function calculates a transaction fee based on the following rules:

Fee Percentage: 1.5% of the amount you want to send.
Minimum Fee: KES 10. The fee will never be lower than this, even if 1.5% of the amount is less than KES 10.
Maximum Fee: KES 70. The fee will never exceed this, even if 1.5% of the amount is higher than KES 70.
You'll be prompted to enter the amount you wish to send. The function then calculates the fee, applies the minimum and maximum constraints, and displays the estimated fee along with the total amount that will be debited from your account.

How to Use
To use this fee estimator:

Save the Code: Copy and save the provided JavaScript code. You can embed it directly within <script> tags in an HTML file or save it as a .js file and link it to your HTML.
Open in Browser: Open your HTML file in any web browser.
Run the Function: Open your browser's developer console (typically by pressing F12). In the console, type estimateTransactionFee() and press Enter.
A prompt will appear asking you for the amount you want to send. Enter a positive number, and the fee details will be displayed in the console.

Example
Let's say you want to send KES 1,000.

Unatuma Ngapi? (KES): 1000
Output in Console:

Sending KES 1000:
Calculated Transaction Fee: KES 15
Total amount to be debited: KES 1015
Send Money Securely!
Customization
You can easily adjust the fee parameters if the rates change or if you want to model different scenarios. Just modify the FEE_PERCENTAGE, MIN_FEE, and MAX_FEE constants directly in the code:

JavaScript

const FEE_PERCENTAGE = 0.015; // e.g., 0.02 for 2%
const MIN_FEE = 10; // e.g., 20 for a minimum of KES 20
const MAX_FEE = 70; // e.g., 100 for a maximum of KES 100
