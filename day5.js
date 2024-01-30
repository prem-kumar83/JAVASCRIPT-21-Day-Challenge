const favoriteColors=["Yellow", "Red", "Green", "Pink", "Orange"];

console.log("Original Array Element=",favoriteColors);
//Accessing element by index
console.log(favoriteColors[3]);

//Adding element to the array(both beginning and end)
favoriteColors.push("Black");   //add element to end position of an array
console.log(favoriteColors);
favoriteColors.unshift("White"); //add element to beginning position of an array
console.log(favoriteColors);

//Removing elements from the array (using pop and shift or splice)
favoriteColors.pop();   //perform pop method to remove element from end of array
console.log(favoriteColors);
favoriteColors.shift(); //perform shift method to remove element from beginning of array
console.log(favoriteColors);
favoriteColors.splice(1,3); //perfrom splice method to remove element without leaving holes in the array
console.log(favoriteColors);

