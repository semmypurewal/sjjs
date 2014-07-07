## Recap

Last time, we learned about functions. A _function_ is simply a small packaged command that we can use again and again by name.

For example, here is the definition for a function that adds two numbers together.

    var add = function (a, b) {
        return a + b;
    }

We can use this to add arbitrary functions.

    add(5, 8);
    //=> 14

    add(10,20);
    //=> 30

We can even compose it with additional calls to `add`.

    add(10, add(5, 8));
    //=> 23

Functions don't need to only return numbers, they can also return -- for example -- strings.

    var sayHelloTo = function (name) {
        return "Hello, " + name;
    }

    sayHelloTo("Karen");
    //=> "Hello, Karen"

**Practice Problem:** Modify the above function so that it includes an exclamation mark at the end, e.g. make it return "Hello, Karen!"

In addition, we learned about _boolean_ expressions, which are simply expressions that return `true` or `false`. We can use boolean expressions to create functions that check whether certain properties hold for a given input.

    var isOldEnoughToDrive = function (age) {
        return age >= 16;
    }

    isOldEnoughToDrive(15);
    //=> false

    isOldEnoughToDrive(16);
    //=> true

Likewise, we can create very complex boolean expressions by combining them with _and_ (`&&`) and _or_ (`||`).

    var isDivisibleByThreeAndFive = function (num) {
        return num % 3 === 0 && num % 5 === 0;
    }

    isDivisibleByThreeAndFive(15);
    //=> true

    var isASuit = function (potentialSuit) {
        return potentialSuit === "hearts" || potentialSuit === "spades";
    }

**Practice Problem:** Modify the above function so that it includes all suits. If that's too easy, modify it so that the input is case insensitive.

Last, but not least, we learned that we can control the execution of code paths by using `if` and `if-else` statements.

    var suit = "hearts";

    if (isASuit(suit)) {
        console.log("That's a valid suit!");
    } else {
        console.log("That suit's invalid");
    }


Remember, `if` statements can take arbitrary boolean conditions inside the parentheses -- this includes compound conditions with `&&` and `||`.

#### Loops

Believe it or not, Computers are mostly interesting because they can repeat things over and over again very fast. This allows them to do a lot of things that it would take humans a *really* long time to do. This fundamental idea is essentially the building block of all interesting computer programs.

The most basic way to repeat something in JavaScript is with a `for` loop. (There are other types of loops including `while` loops and `do-while` loops, but we'll ignore them for now). The most basic structure looks something like this.

    var count;
u    
    for (count = 0; count < 100; count = count + 1) {
        console.log(count);
    }

**Practice Problem:** Write a loop that only prints out the multiples of 3 less than 100

**Practice Problem:** (FIZZBUZZ) Write a program that prints out the first 100 numbers, but if the number is divisible by 3, print out FIZZ instead of the number, if the number is divisible by 5 print out BUZZ, and if the number is divisible by both, print out FIZZBUZZ.

**Practice Problem:** Write a loop that multiplies the first 100 numbers together.

Loops are most interesting when we use them inside functions.

    var sumFirstOneHundredNumbers = function () {
        var sum = 0;
        var count = 0;
    
        for (count = 0; count <= 100; count = count + 1) {
            sum = sum + 1;
        }
    
        return sum;
    }

    sum();
    //=> 5050

