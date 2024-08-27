// Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are the same, then return triple their sum.  

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  
 

function computeSum(a, b) {
    // Calculate the sum of the two integers
    const sum = a + b;

    // Check if the two integers are the same
    if (a === b) {
        // Return triple their sum
        return sum * 3;
    } else {
        // Return the normal sum
        return sum;
    }
}
computeSum(10,10)

/* --------------------------------------------------------------------------------- */