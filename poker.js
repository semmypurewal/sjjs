var poker = {};  // our exported object

poker.isASuit = function (s) {
    var result = false;

    if (s === "hearts") {
        result = true;
    }
    
    return result;
}

poker.isARank = function (r) {
    return [ "two", "three", "four", "five",
             "six", "seven", "eight", "nine",
             "ten", "jack", "queen", "king",
             "ace" ].indexOf(r) > -1;

}

poker.isACard = function (c) {
    return poker.isARank(c.rank) && poker.isASuit(c.suit);
}

poker.isADeck = function (d) {
    // 52 cards
    // all unique
    var count = d.length;
    
}

poker.createDeck = function () {
    var deck = [];
    ["hearts", "clubs"].forEach(function (suit) {
        ["two", "three", "four"].forEach(function (rank) {
            deck.push({ "suit": suit, "rank": rank });
        });
    });
    return deck;
}

poker.shuffle = function (d) {
}

poker.isAHand = function (h) {
}

poker.highestRank = function (h) {
}

poker.lowestRank = function (h) {
}

poker.highCard = function (h) {
}

poker.lowCard = function (h) {
}

poker.containsPair = function (h) {
}

poker.containsTwoPair = function (h) {
}

poker.containsThreeOfAKind = function (h) {
}

poker.containsFullHouse = function (h) {
}

poker.containsStraight = function (h) {
}

poker.containsFlush = function (h) {
}

poker.containsStraightFlush = function (h) {
}

poker.containsRoyalFlush = function (h) {
}

// export the poker object
module.exports = poker;
