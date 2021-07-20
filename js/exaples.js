var myArray = [[1, "Hello"], [2, "World"], [3, "!"]];
var pop = myArray.pop();

console.log(myArray);//Output will be: [[1, "Hello"], [2, "World"]]
console.log(pop); //Output will be: [3. "!"]

myArray.push([12, "push"]); // [[1, "Hello"], [2, "World"], [3, "!"], [12, "push"]];

var removeFromArray = myArray.shift();

console.log(removeFromArray);//Output will be: [1, "Hello"]
console.log(myArray);//Output will be: [[2, "World"], [3, "!"]]

myArray.unshift(["Aruzhan", 18]); //Output will be: [["Aruzhan", 18],[1, "Hello"], [2, "World"], [3, "!"]];

// ex = "Hello"
typeof(2);//int
typeof("2");//string