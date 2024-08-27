// Write a JavaScript program to check a pair of numbers and return true if one of the 
// numbers is 50 or if their sum is 50.  

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */ 
 function checkNumbers(num1, num2) {
    // Check if either number is 50 or if their sum is 50
    if (num1 === 50 || num2 === 50 || (num1 + num2) === 50) {
        return true;
    }
    return false;
}
checkNumbers(50,50)
/* --------------------------------------------------------------------------------- */