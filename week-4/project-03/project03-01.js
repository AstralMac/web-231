/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: 
      Date:   

      Filename: project03-01.js
*/

 //Variables for menuItems
 const menuItems = document.getElementsByClassName ("menuItem");

 for(let i = 0; i < menuItems.length; i++){
      menuItems[i].addEventListener("click", calcTotal);
}
// Function to calculate the total
function calcTotal() {
      // Declare orderTotal variable
     let orderTotal = 0;
      // Loop for the contents of the menuItems collection
      for (let i = 0; i < menuItems.length; i++) {
            //Check if the item has been checked
            if(menuItems[i].checked) {
                  // Increase the value of orderTotal by the value of the menuItems[i]
                  orderTotal += Number(menuItems[i].value);
            }
      }
      //Change the innerHTML property of the element with id "billTotal" to the formatted orderTotal value
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}
 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
      return "$" + value.toFixed(2);
   }