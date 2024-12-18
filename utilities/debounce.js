/**
 * Debounce (= Limiting frequency of function calls) a function.
 * Helps to improve performance.
 * @param {Function} func Function that will be delayed
 * @param {number} delay Delay of Function Call
 * @returns {Function} Delayed / Debounced Function
 */
export function debounce(func, delay) {
    let timerID;


    // Return anonymous function that takes in any number of arguments
    return function(...args) {

        // Clear previous timer to prevent execution of function 'func'
        clearTimeout(timerID);

        // Set new timer that will execute 'func' after specified delay
        timerID = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
