/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/

function plannedIntersect(firstArr) {
    // Return a function that accepts a second array (secondArr)
    return function (secondArr) {
        // Filter elements from firstArr that are also present in secondArr
        const intersection = firstArr.filter((item) =>
            secondArr.includes(item)
        );
        return intersection;
    };
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/

try {
    module.exports = plannedIntersect;
} catch (e) {
    // catch the ref err
    module.exports = null;
}
