// Write a JavaScript program that converts a callback-based function to a Promise-based function.

// In the above exercise,
// Create "callback_BasedFunction()" function takes two arguments arg1 and arg2, 
// and a callback function "callback". Inside this function, it performs some asynchronous 
// operations using setTimeout to simulate a delay. After the delay, it calculates the sum of 
// arg1 and arg2. If the result is not an odd number, it calls the callback with an error 
// (new Error('Result is not odd!')) and a null result; otherwise, it calls the callback with 
// null error and the calculated result.

// Create "promisifiedFunction()" function is a wrapper function that converts 
// "callback_BasedFunction()" function into a Promise-based function. It takes the same 
// arguments arg1 and arg2. Inside the Promise's executor function, it calls 
// "callback_BasedFunction()" function with the provided arguments and a callback. 
// Depending on the result, the Promise is resolved by calling resolve(result) or rejected by 
// calling reject(error).

// Finally in the usage examples, the first one passes arguments 2 and 3, which will result in 
// an odd number, so the Promise will be resolved. The second invocation passes arguments 2 and 4,
// which will result in an even number, so the Promise will be rejected.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    

/* --------------------------------------------------------------------------------- */