var poker = require("./poker.js");

// isASuit
assert( poker.isASuit("hearts") === true, "isASuit" );
assert( poker.isASuit("coins") === false, "isASuit" );

// create tests for isARank
assert( poker.isARank("one") === false, "isARank" );
assert( poker.isARank("ace") === true,  "isARank" );
assert( poker.isARank("fifty") === false, "isARank" );


// isACard
// write one more positive test, and then write
// the negative assertions for the non cards below
var card1 = { "suit":"card", "rank":"ten" }
var card2 = { "suit":"hearts", "rank":"ace" }
assert( poker.isACard(5) === false, "isACard");
assert( poker.isACard(card1) === false, "isACard" );
assert( poker.isACard(card2) === true, "isACard" );


var notACard1 = "hello world";
var notACard2 = 3;
var notACard4 = { "rank":"ace", "suit":"coins" }


// isADeck
// you can hard code a deck, or you can check some basic
// properties of it (every entry is a card, there are 52
// elements, and there are no duplicates)

// createDeck
// all we need is one test
//assert( poker.isADeck(poker.createDeck()) === true, "createDeck" )

console.log(poker.createDeck());


// shuffle
// we need to make sure the result of a shuffle
// is a deck, and that the cards are not in order

// isAHand


//our assertion function
function assert (test, msg) {
    var response = "";
    
    if (typeof msg !== undefined) {
        response += msg + " : ";
    }
    
    if (test) {
        response += "PASS";
    } else {
        response += "FAIL";
    }

    console.log(response);
}




