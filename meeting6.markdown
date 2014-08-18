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

## Objects

