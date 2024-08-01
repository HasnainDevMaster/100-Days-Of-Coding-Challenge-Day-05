"use strict";
// 100 Days Of Coding Challenge!
/**Question 13:

Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
//-------------------------------------------------------------------------------------------------------------------------------------------
// An array of favorite transportation
const transportation = [
    "Suzuki Gixxer motorcycle",
    "Honda Insight HEV car",
];
// Print a statement for owning each type of transportation
transportation.forEach((transportation) => {
    console.log(`I would like to own a ${transportation}.`);
});
