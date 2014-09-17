## Recap

Previously we learned about arrays. The best way to think about arrays
are as a linear collection of objects indexed by numbers. The first
element of an array is indexed by 0, and the last element of the array
is indexed by the length of the array minus 1.

    var list = [ "this", "is", "a", "list", "of", "words" ];
    
    list[0];
    //=> this
    
    list[list.length - 1]
    //=> words

You can _mutate_ arrays by setting the value at a particular index to
some new value.

   list[5] = "strings";
   list;
   //=> [ "this", "is", "a", "list", "of", "strings" ];

You can also mutate arrays by adding new values to the end using the
`push` method.

    list.push("and");
    list.push("here's");
    list.push("more");
    list;
    //=> [ "this", "is", "a", "list", "of", "strings", "and", "here's", "more" ];

The most basic way to process an array is by using a `for` loope that
iterates over the indices of the array.

    var contains = function (list, word) {
        var index ,
            result = false; // assume it doesn't contain the word
    
        for (index = 0; index < list.length; index = index + 1) {
            if (list[index] === word) {
                result = true;  // found it!
            }
        }
    
        return result;
    }

But it's better to use the built-in array functions like `some`,
`every`, `map`, `filter`, and `reduce` to solve these types of
problems whenever possible.

    var contains = function (list, word) {
        return list.some(function (element) {
            return word === element;
        });
    }

## Objects As Maps

Believe it or not, sometimes it's useful to have data stored in
structures that are indexed by things that aren't numbers. These are
often referred to as _dictionaries_ or _maps_. In JavaScript, these
data structures are (almost) equivalent to JavaScript _objects_. An
object is just a collection of _keys_ that map to _values_. You can
access and mutate the elements of an object in the same way that you
can access and mutate elements of an array, but instead of using the
numbered index, you use the name of the key.

Defining one is similar to defining an array, but we use curly-braces
and have to specify the key _and_ the value for each entry. We do that
by separating them with semi-colons.

    var person = { "name":"Semmy", "age":37 }
    
    person["name"];
    //=> Semmy
    
    person["age"];
    //=> 37

If we use strings for our keys, we can also use JavaScript's dot
operator to access elements of the array.

    person.name;
    //=> Semmy
    
    person.age
    //=> 37

But if we use numbers for our keys, we'll run into problems when we
try to do this.

    var list = { "1":"first", "2":"second" }

    list[2];
    //=> second
    
    list.2;
    //=> Syntax Error: Unexpected Number

Like arrays, we can _mutate_ objects by setting updating the values.

    person.name = "John";
    
    person.name;
    //=> John
    
    person.age;
    //=> 37
    

== What are these good for?

Objects are good for associating a set of related data with a single
variable and building up custom data types. For instance, suppose we
wanted to write a card game. Cards have ranks and suits. Without
objects, we may try something like this:

    var cardRank = "ace";
    var cardSuit = "spades";

The difficulty is that the two pieces of data aren't related except
in the programmer's mind. This is a recipe for bugs and brittle
code. A better approach is to use objects:

    var card = { "rank":"ace", "suit":"spades" }

This also allows us to create arrays of cards. For example, we could
represent a card hand using an array of card objects:

    var hand = [
        { "rank":"ace",  "suit":"spades" },
        { "rank":"five", "suit":"clubs" },
        { "rank":"ten",  "suit":"diamonds" },
        { "rank":"queen","suit":"clubs" },
        { "rank":"three","suit":"hearts" }
    ];


