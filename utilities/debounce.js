/**
 * Debounce (= Limiting frequency of function calls) a function.
 * Helps to improve performance.
 * 
 * @param {Function} func 
 * @param {number} delay
 * 
 * @returns {Function}
 */
export function debounce(func, delay) {
    let timerID;


    // Return anonymous function that takes in any number of arguments
    return function (...args) {
        // Clear previous timer to prevent execution of function 'func'
        clearTimeout(timerID);

        // Set new timer that will execute 'func' after specified delay
        timerID = setTimeout(() => {
            func(...args);
        }, delay);
    }
}