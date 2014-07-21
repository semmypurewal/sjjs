## Recap

First, we'll start with the solution to last weeks problems involving `for` loops. The first problem is to write a function to sum the first 100 numbers and return the result.

     var sumOneHundred = function () {
         var sum = 0;
         var number;
     
         for (number = 0; number <= 100; number = number + 1) {
             sum = sum + number;
         }
     
         return sum;
     }

Next, we can generalize this to sum the first `n` numbers by taking a variable `n` as an argument, and then using it to parameterize our loop.


    var sumFirstNNumbers = function (n) {
        var sum = 0;
        var number;
    
        for (number = 0; number <= n; number = number + 1) {
            sum = sum + number;
        }
    
        return sum;
    }

What if we want to sum between the numbers `a` and `b` inclusive? We can accept to arguments, and then use them to parameterize our `for` loop, starting at `a` and ending at `b`.

    var sumAToB = function (a, b) {
        var sum = 0;
        var number;
    
        for (number = a; number <= b; number = number + 1) {
            sum = sum + number;
        }
    
        return sum;
    }

Next, we can use a loop and some `if` statements to determine if a number is prime or not. A number is prime if it is only divisible by 1 and itself. In this solution, we assume the number is prime unless we find evidence to the contrary.

    var isPrime = function (potentialPrime) {
        var potentialFactor;
        var result = true;
    
        // it's not prime if it's 1 or less than 0
        if (potentialPrime === 1 || potentialPrime < 0) {
            result = false;
        }
    
        // now we can check to see if there are any divisors other than 1 and itself
        for (potentialFactor = 2; potentialFactor < potentialPrime; potentialFactor = potentialFactor + 1) {
            if (potentialPrime % potentialFactor === 0) {
                result = false;
            }
        }

        // at this point, if we've learned it's not prime, result is false
        return result;
    }


We can also improve this a couple of ways. First, we can exit out of the `for` loop early if we find a factor (by using a complex conditional), and we only actually need to check up to the square-root of the number (which we can get by using `Math.sqrt`). Finally, we solve a problem that is a little more complicated by composing the previous solution with a new function. This function sums all of the primes less than a given number.

    var sumOfPrimesLessThan = function (n) {
        var sum = 0;
        var num;
    
        for (num = 0; num < n; num = num + 1) {
            if (isPrime(num)) {
                sum = sum + num;
            }
        }
    
        return sum;
    }

And now we create a function that sums the first 100 primes, also by composing the previous function.

    var sumOfFirstNPrimes = function () {
        var numPrimesSoFar = 0;
        var sum = 0;
        var currentNumber;
    
        for (currentNumber = 0; numPrimesSoFar < 100; currentNumber = currentNumber + 1) {
            if (isPrime(currentNumber)) {
                sum = sum + currentNumber;
                numPrimesSoFar = numPrimesSoFar + 1;
            }
        }
    
        return sum;
    }


For similar problems relating to loops, I encourage you to check out projecteuler.net. The more you practice, the better you'll get at them!

## Arrays

Arrays are the most basic compound data type in JavaScript. They allow you to associate multiple values with a single variable name. For example, this array consists of the first 10 prime numbers.

    var primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

We can access the elements of an array by using the square-bracket operator and an index.

    nums[3];
    //=> 7

It might surprise you that this returns 7, since it's actually the _fourth_ element in the array. That's because arrays in JavaScript (and most other modern programming languages) start their index numbering at 0.

    nums[0];
    //=> 2
    
    nums[1]
    //=> 3

What happens if you ask for a index that doesn't exist? JavaScript returns the special value `undefined`.

    nums[-1]
    //=> undefined

    nums[15]
    //=> undefined

Arrays can be passed as arguments to functions just like anything else:

    var secondElementOf = function (arr) {
       return arr[1];
    }

And you'll often want to iterate over the values to determine some property of the array. But how can you do that if you don't know how many elements there are? Well, you can keep trying elements until you hit `undefined`, or you can use the `length` property of an array.

    primes.length
    //=> 10

We can use this to write a function that prints all of the elements of the array by using a for loop to iterate over all of the indices.

    var printEachElement = function (list) {
        var index;
    
        for (index = 0; index < list.length; index++) {
            console.log(list[index]);
        }
    }

One of the simplest things you can do with a list of numbers is return their sum. Here's an example that does just that. It's a lot like the summing examples we've seen previously, but here we are using the `for` loop to control the indices of the array instead of the actual values we are summing.

    var smallestNumber = function (listOfNumbers) {
        var index;
        var smallestSoFar = listOfNumbers[0];
    
        for (index = 1; index < listOfNumbers.length; index = index + 1) {
            if (listOfNumbers[index] < smallestSoFar) {
                smallestSoFar = listOfNumbers[index];
            }
        }
        
        return smallestSoFar;
    }


// include a bit about creating arrays here

## Strings

Strings are just special cases of Arrays where all the elements are characters. They are denoted using quotes, but can be manipulated just like Arrays.

    var greeting = "hello!";
  
    greeting[0];
    //=> h

    greeting[greeting.length - 1];
    //=> !

    greeting[greeting.length - 2];
    //=> o

As long as the operations in your function work on characters (as opposed to numbers), you can apply the function to strings _or_ arrays.

    printEachElement(greeting);

    //=> h
    //=> e
    //=> l
    //=> l
    //=> o
    //=> !

Note that you can't _mutate_ strings, meaning setting an index won't work in the same way that it works with arrays. More on this later.

## Problems

**Practice Problem:** Write a function called `firstNumDivisibleByN` that accepts two arguments: `n` and an array, and returns `true` if the first number in the array is evenly divisible by `n`, false otherwise. For example, the function would work as follows.

    firstNumDivisibleBy(2, [5, 3, 2, 1]);
    //=> false

    firstNumDivisibleBy(5, [5, 3, 2, 1]);
    //=> true

**Practice Problem:** Write a function called `secondLetterIs` that accepts two arguments: `letter` and an array, and returns `true` if the second letter in the string is `letter`.

**Practice Problem:** Write a function called `containsValueTwice` that accepts a number and an array, and returns `true` if that number appears in the array twice, and `false` otherwise.

**Practice Problem:** Generalize the previous solution into a function called `containsValueNTimes` so that it can check for a value an arbitrary number of times.

**Practice Problem:** Write a function called `isCapitalized` that accepts a string and returns `true` if the first letter is a capital letter. How can you determine that? Remember that you can use strings in comparisons in the same way that you can use numbers, and the ordering is alphabetical (with capital letters having lower values than their lower-case counterparts).

**Practice Problem:** Write a function called `containsNVowels` that accepts a number, `n`, and a string and returns true if a string contains at least `n` vowels.

**Practice Problem:** Write a function called `atLeastOneEven` that returns `true` if at least one of the numbers in the array is even, false otherwise.

**Practice Problem:** Write a function called `allEven` that returns `true` if all of the values in the array are even, and false otherwise.

**Practice Problem:** Write a function that accepts two arrays, and returns true if any of the numbers in the first array appear twice in the second array. You might want to reuse the function `containsValueNTimes` from above.

**Practice Problem:** Generalize the above problem above so that it accepts two arrays and a number, and returns true if any of the numbers in the first array appear `n` times in the second array.

**Practice Problem:** Write a function that accepts a string and returns the same string, only in reverse! (HINT: create a new empty string, and concatenate each letter of the original string to it in reverse)


