## Class 1

### Set Up Your Environment

Install sublime text and Chrome, if you don't already have it.

### Hello World!

Open up the Chrome JavaScript console by going to _View -> Developer -> JavaScript Console_. There, you can type

    console.log("hello world");

and hit enter. You should see "hello world" and "undefined" appear on the following lines. Congratulations, you've written your first JavaScript program!

### Set up a simple HTML page with a script tag

Coming soon ...

## Class 2

### Quick Review

Last time, we talked about a few different things including setting up a working environment, interacting with the Chrome JavaScript console, _variables_, some _primitive operations_, and comments. Here's some of the examples that we did.

#### Hello World!

We can print out "hello world" to the JavaScript console.

    console.log("hello world!");
    //=> hello world!

#### Variables

This line declares a variable called 'rank'.

    // declare a variable called rank
    var rank;

Here, we store a string in the rank variable.

    rank = "ace";

Similarly, we can declare a variable and store a value in it in the same line

    // declare and define a variable called suit
    var suit = "spades";

Once we have some variables, we can create new variables that are compositions of existing variables.

    // create a card by concatenating the suit and the rank
    var card = rank + " of " + suit;

    console.log(card);
    //=> ace of spades

#### Non-String Variables

Variables can store things other than Strings. They can also store numbers, for instance.

    var price = 5.99;
    var taxRate = .09; // CA has a 9% sales tax rate?

You'll see that our `taxRate` variable has multiple words. When that's the situation, we use _Camel Case_ which basically means we make the first letter lowercase, and the first letter of each subsequent word uppercase.

Once we have variables storing numbers, we can operate on them using basic elementary school math operations.

    var totalPrice = price + (price * taxRate);
    console.log(totalPrice);
    //=> 6.52910000000000001

We'll probably want to round that off to make it look nice, but we'll defer that for now.

#### Functions

Sometimes we'll want to perform some operations over and over again, but we'll want to use different values for the operation. For example, suppose we wanted to write a program that calculated the price of many different items.

    var itemOnePrice = 4.99;
    var itemTwoPrice = 3.10;
    var itemThreePrice = 2100.00;

Now in order to compute the taxes on all three of these items, we'll end up with something like this.

    var itemOneTotalPrice = itemOnePrice + (itemOnePrice * taxRate);
    var itemTwoTotalPrice = itemTwoPrice + (itemTwoPrice * taxRate);
    var itemThreeTotalPrice = itemThreePrice + (itemThreePrice * taxRate);

This is a problem. Since we essentially have to copy the formula three times, it's more likely that we'll make a mistake. Wouldn't it be better if we could just do something like this?

    var itemOneTotalPrice = calculateTotal(taxRate, itemOnePrice);
    var itemTwoTotalPrice = calculateTotal(taxRate, itemTwoPrice);
    var itemThreePrice = calculateTotal(taxRate, itemThreePrice);

This is an example of a function. The function call `calculateTotal` takes the place of the formula. But how do we define it? It's pretty straight-forward. We create a variable and store the function in it.

    var calcuateTotal = function (rate, price) {
        return price + (price * rate);
    }

In this example, `rate` and `price` are placeholders for the _inputs_ to the function, while the `return` statement represents the _output_ of the function. We _call_ a function by using the variable name associated with it, followed by the actual inputs in parentheses, separated by commas. Here's another example of a function that adds three numbers.

    var addThree = function (firstNum, secondNum, thirdNum) {
        return firstNum + secondNum + thirdNum;
    }
    

We can call it like this:

    addThree(5, 10, 15);
    //=> 30

You can _compose_ functions by calling functions inside other function calls. Since `console.log` is a function, we can call `addThree` inside it to print out the result of our addition.

    console.log(addThree(5, 10, 15));
    //=> prints out 30

But we can also use this composition trick to get a total price for the three items in the above examples.

    var total = cacluateTotal(taxRate, addThree(itemOnePrice, itemTwoPrice, itemThreePrice));

If you remember your arithmetic, you can see that this works because of the commutative and distributive rules from algebra.

    a + (a * z) + b + (b * z) + c + (c * z) = a + b + c + (a * z) + (b * z) + (c * z)
                                            = a + b + c + (a + b + c) * z

This math stuff isn't super-important, but if you roughly understand it, it may help you see where we are headed with these ideas. That said, it's probably worth knowing the operators that are available to you. It turns out that JavaScript gives you all of the normal math operators, along with one that may seem unusual.

| Operator | Meaning  |
| :------: | :------- |
|    +     | addition |
|    -     | subtraction |
|    *     | multiplication |
|    /     | division |
|    %     | remainder |

**Practice Problem: ** Write a function that takes a rank and a suit as input, and returns a string representation of a card.

**Practice Problem: ** Compose the previous function with `console.log` and print out a few cards.

**Practice Problem: ** Create a function that takes in a cost and a quantity and outputs the total pre-tax cost. Compose this with the calculateTotal function to create a function that calculates the total cost of the set of items.

**Practice Problem** Write a function that converts a temperature in Celsius to a temperature in Fahrenheit.


## Conditionals

Writing basic operations that calculate the value of arithmetic expressions is fun, but we'd really like a way to do more complex things. In this section, we'll learn about `if` and `if-else` statements which allow us to compute more complex things. Here's an example that checks to see if a number is bigger than 100.

    var num = 105;
    
    if (num > 100) {
        console.log("the number is bigger than 100");
    }
    
    //=> the number is bigger than 100

The code in the subsequent _code block_ is only executed if the _condition_ evaluates to true. You can also use an `else` statement to define a _code block_ for false.

    var anotherNum = 95;

    if (num > 100) {
        console.log("the number is bigger than 100");
    } else {
        console.log("the number is not bigger than 100");
    }

    //=> the number is not bigger than 100

We can also make more complex conditions using the and and or operators, which look like `&&` and `||`.

    if (90 < num && num < 100) {
        console.log("the number is bigger than 90 and smaller than 100");
    }

    if (number < 0 || number > 200) {
        console.log("That's an invalid age!");
    }

You can build up relatively complex expressions from these basic _boolean_ operators.

| Operator | Meaning  |
| :------: | :------- |
|    <     | less than |
|    >     | greater than |
|    <=    | less than or equal to |
|    >=    | greater than or equal to |
|    ===   | equals |
|    !==   | not equals |
|    &&    | and |
|    ||    | or |


We can use these to build up functions that return true and false, and we can use these functions to build more complex programs. For example:

    var canLegallyDrive = function (age) {
        if (age >= 16) {
            return true;
        } else {
            return false;
        }
    }

Since boolean expressions already return true or false, we can simplify it to something like this.

    var canLegallyDrive = function (age) {
        return age >= 16;
    }

**Practice Problem:** Write a function that returns `true` if an input is an even number.

**Practice Problem:** Write a function that returns `true` if the input is a valid card suit, false otherwise.

**Practice Problem:** Write a function that returns `true` if the input is a valid card rank, false otherwise.
