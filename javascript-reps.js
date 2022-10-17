// Week 3 Day 3: Part II: Javascript Reps



//1.
// Easy Going
// Write a for loop that will log the numbers 1 through 20.

for (i = 1; i <=20; i++) {
    console.log(i)
}



//2.
// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.
// Hint: Think about the increment expression.

for (i=0; i <=200; i+=2){
    console.log(i)
}



//3. 
// Fizz Buzz
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.
// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (i=1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log ("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}



//4.
// Wild Wild Life
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
//solution a:
plantee.splice(2, 1, 5001)
console.log(plantee)

//solution b:
// plantee[2]=5001
// console.log(plantee)

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy.splice(3, 1, "Gotham City")
console.log(wolfy)

// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins")
console.log(dart)

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy.splice(0,1,"Gameboy")
console.log(wolfy)



//5.
// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop(not a typo - try it out! Try a for of loop) to call toUpperCase()on each of them and print out the result.
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for (let i of ninjaTurtles) {
    console.log(i.toUpperCase())
}



//6. 
// Here is a list of favMovies:
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Console log: the index of Titanic
console.log(favMovies.indexOf("Titanic"))
console.log(favMovies[8])

// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
// Note: if you have to add to the array, feel free to add any movie you'd like

// use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
// Use the method pop
// push"Guardians of the Galaxy"
// Reverse the array
// Use the shiftmethod
// unshift- what does it return?
// splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// store the value of your slicein a variable, console.log it - Thought question: what is going on here?
// console.log your final results
// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?

favMovies.sort() //sort method rearranges elements to alphabetical order
favMovies.pop() //pop method removes last element
favMovies.push("Guardians of the Galaxy") //push method adds movie to the end of array
favMovies.reverse() //reverse method reverses order of elements
//console.log(favMovies)
favMovies.shift() //shift method deletes the first element of array
//console.log(favMovies)
favMovies.unshift("Minions") // unshift method adds Minions to beginning of array
console.log(favMovies.indexOf("Django Unchained")) //prints: 15, indexOf method returns what index the element is; if the element does not exist in the array it will print -1
favMovies.splice(15, 0, "Avatar") //adds Avatar to index 15 spot, splice method can delete and insert elements in the middle of array
//favMovies.slice()

let midArray = favMovies.length / 2 
console.log(midArray) //returns half of total array, prints: 10

let newArray = favMovies.slice(10, 20)  //slices 2nd half of favMovies and puts it into newArray, it is like making a copying
console.log(newArray) //this will print 2nd half of array in a new variable

console.log(favMovies)



//7.
// Where is Waldo
// With the following multi-dimensional array
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Eggbert (hint look at the slice/splice method(s))
// Change "Neff" to "No One"
// Access and console.log "Waldo"

whereIsWaldo.splice(1, 1)
console.log(whereIsWaldo)
whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1])

