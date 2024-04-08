/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Malcolm Abdullah
      Date:   April 7th, 2024

      Filename: project02-04.js
 */
 


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

 //Variables and values for menu items
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

//Event handler for the calcTotal function
document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;
//Function to calculate the total bill
function calcTotal() 
{
   let Cost = 0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   // Increase the value of Cost by the value of the item chosen
   Cost += buyChicken ? CHICKEN_PRICE : 0;
   Cost += buyHalibut ? HALIBUT_PRICE :0;
   Cost += buyBurger ? BURGER_PRICE :0;
   Cost += buySalmon ? SALMON_PRICE :0;
   Cost += buySalad ? SALAD_PRICE: 0;

   //display food total 
   document.getElementById("foodTotal").innerHTML = formatCurrency (Cost);

   // Declare  tax
   let tax = Cost * SALES_TAX;

   // Display food tax
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);

   //Declare total cost
   let totalCost= Cost + tax;

   //Display the total cost
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}