/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

function recVolume(height) {
    let width = null;
    let length = null;
    let volume = null;

    return function (dimension) {
        if (width === null) {
            // Collect the width
            width = dimension;
        } else if (length === null) {
            // Collect the length
            length = dimension;
            // Calculate the volume
            volume = height * width * length;
        }

        // Return the calculated volume once all dimensions are collected
        return volume;
    };
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = recVolume;
} catch (e) {
    // catch the ref err
    module.exports = null;
}
