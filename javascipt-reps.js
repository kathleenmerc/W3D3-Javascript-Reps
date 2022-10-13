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

for (i=0; i <=20; i+=2){
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
