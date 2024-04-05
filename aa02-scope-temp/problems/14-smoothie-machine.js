/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

function smoothieMachine(...initialIngredients) {
    // Return a function that accepts any number of additional ingredients and a function
    return function (...newIngredients) {
        // Concatenate all ingredients (initial and new) into a single array
        const allIngredients = [...initialIngredients, ...newIngredients];

        // Create a formatted string with all ingredients
        const ingredientString = allIngredients.join(" and ");

        // Check if a function is provided as the last argument
        const lastArg = allIngredients[allIngredients.length - 1];
        const hasFunction = typeof lastArg === "function";

        // If a function is provided, call it with the concatenated ingredients
        if (hasFunction) {
            return lastArg(ingredientString);
        } else {
            // Otherwise, return the final string describing the smoothie
            return `I'm having a smoothie with ${ingredientString}`;
        }
    };
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = smoothieMachine;
} catch (e) {
    // catch the ref err
    module.exports = null;
}
