/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Malcolm Abdullah 
      Date:  March 31st, 2024

      Filename: project02-02.js
 */
 
//Function to verify form fields
function verifyForm() {
     let name = document.getElementById("name").value;
     let email = document.getElementById("email").value;
     let phone = document.getElementById("phone").value;

     // Conditional operator that tests the truthy or falsy values of name, email, and phone using the "&&" operator.
     name && email && phone ? window.alert("Thank You") : window.alert("Please fill all fields");

}

document.getElementById("submit").addEventListener("click", verifyForm)