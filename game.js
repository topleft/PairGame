var deck =  [
            { code: "&#x1F0A1", weight: 1, name: "Ace of Spades", suit: "Spades"},
            { code: "&#x1F0A2", weight: 2, name: "Two of Spades", suit: "Spades"},
            { code: "&#x1F0A3", weight: 3, name: "Three of Spades", suit: "Spades"},
            { code: "&#x1F0A4", weight: 4, name: "Four of Spades", suit: "Spades"},
            { code: "&#x1F0A5", weight: 5, name: "Five of Spades", suit: "Spades"},
            { code: "&#x1F0A6", weight: 6, name: "Six of Spades", suit: "Spades"},
            { code: "&#x1F0A7", weight: 7, name: "Seven of Spades", suit: "Spades"},
            { code: "&#x1F0A8", weight: 8, name: "Eight of Spades", suit: "Spades"},
            { code: "&#x1F0A9", weight: 9, name: "Nine of Spades", suit: "Spades"},
            { code: "&#x1F0AA", weight: 10, name: "Ten of Spades", suit: "Spades"},
            { code: "&#x1F0AB", weight: 11, name: "Jack of Spades", suit: "Spades"},
            { code: "&#x1F0AD", weight: 12, name: "Queen of Spades", suit: "Spades"},
            { code: "&#x1F0AE", weight: 13, name: "King of Spades", suit: "Spades"},
            { code: "&#x1F0B1", weight: 1, name: "Ace of Hearts", suit: "Hearts"},
            { code: "&#x1F0B2", weight: 2, name: "Two of Hearts", suit: "Hearts"},
            { code: "&#x1F0B3", weight: 3, name:"Three of Hearts", suit: "Hearts"},
            { code: "&#x1F0B4", weight: 4, name: "Four of Hearts", suit: "Hearts"},
            { code: "&#x1F0B5", weight: 5, name: "Five of Hearts", suit: "Hearts"},
            { code: "&#x1F0B6", weight: 6, name: "Six of Hearts", suit: "Hearts"},
            { code: "&#x1F0B7", weight: 7, name: "Seven of Hearts", suit: "Hearts"},
            { code: "&#x1F0B8", weight: 8, name: "Eight of Hearts", suit: "Hearts"},
            { code: "&#x1F0B9", weight: 9, name: "Nine of Hearts", suit: "Hearts"},
            { code: "&#x1F0BA", weight: 10, name: "Ten of Hearts", suit: "Hearts"},
            { code: "&#x1F0BB", weight: 11, name: "Jack of Hearts", suit: "Hearts"},
            { code: "&#x1F0BD", weight: 12, name: "Queen of Hearts", suit: "Hearts"},
            { code: "&#x1F0BE", weight: 13, name: "King of Hearts", suit: "Hearts"},
            { code: '&#x1F0C1', weight: 1, name: "Ace of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C2', weight: 2, name: "Two of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C3', weight: 3, name: "Three of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C4', weight: 4, name: "Four of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C5', weight: 5, name: "Five of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C6', weight: 6, name: "Six of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C7', weight: 7, name: "Seven of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C8', weight: 8, name: "Eight of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C9', weight: 9, name: "Nine of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CA', weight: 10, name: "Ten of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CB', weight: 11, name: "Jack of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CD', weight: 12, name: "Queen of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CE', weight: 13, name: "King of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0D1', weight: 1, name:'Ace of Clubs', suit: 'Clubs'},
            { code: '&#x1F0D2', weight: 2, name:'Two of Clubs', suit:'Clubs'},
            { code: '&#x1F0D3', weight: 3, name:'Three of Clubs', suit:'Clubs'},
            { code: '&#x1F0D4', weight: 4, name:'Four of Clubs', suit:'Clubs'},
            { code: '&#x1F0D5', weight: 5, name:'Five of Clubs', suit:'Clubs'},
            { code: '&#x1F0D6', weight: 6, name:'Six of Clubs', suit:'Clubs'},
            { code: '&#x1F0D7', weight: 7, name:'Seven of Clubs', suit:'Clubs'},
            { code: '&#x1F0D8', weight: 8, name:'Eight of Clubs', suit:'Clubs'},
            { code: '&#x1F0D9', weight: 9, name:'Nine of Clubs', suit:'Clubs'},
            { code: '&#x1F0DA', weight: 10, name:'Ten of Clubs', suit:'Clubs'},
            { code: '&#x1F0DB', weight: 11, name:'Jack of Clubs', suit:'Clubs'},
            { code: '&#x1F0DD', weight: 12, name:'Queen of Clubs', suit:'Clubs'},
            { code: '&#x1F0DE', weight: 13, name:'King of Clubs', suit:'Clubs'}
          ];


// Deal hand returns array of size num
function dealHand(deck, num){
  // copy array so we can modify hand without changing hand
  var deckCopy = deck.slice();
  // set default for num to make that arg optional
  if (num===undefined) {
    num = 1;
  }
  var hand = [];
  for(var i=0;i<num;i++){
    var index = Math.floor(Math.random()*deckCopy.length);
    var cardArray = deckCopy.splice(index,1);
    hand.push(cardArray[0]);
  }
  return hand;
}

// not being used yet
function contains(array, num){
  var contains=false;
  for(var i=0;i<array.length;i++)
    if(array[i].weight===num)
      contains=true;
  return contains;
}
// returns true or false, works on any size hand
function findPair(hand){
  for (var i = 0; i < hand.length; i++) {
    for (var j = 0; j < hand.length; j++) {
      if(i != j && hand[i].weight === hand[j].weight){
        return true;
      }
    }
  }
  return false;
}



function scoreHand(hand) {
 if (findPair(hand)){
   return true;
 }
 else{
   return false;
}
};


function message(score){
  if(score){
    return "You won!!!";
  }
  else{
    switch(Math.floor(Math.random()*5)){
      case 0: return "nope";

      case 1: return "try again";

      case 2: return "loser";

      case 3: return "weak";

      case 4: return "bummer";
    }
  }
};

// returns string
function showHand(hand) {
  var eachCard = "";
  for (var i = 0; i < hand.length; i++) {
    eachCard += hand[i].code+" ";
  }
  return eachCard;
};


// var hand = dealHand(deck, 2);
// var score = scoreHand(hand);
// var message = message(score);
// console.log(showHand(hand));
// console.log(message);

// $(document).ready(function() {
//   $("deal").on("click", function(){
//     var hand = dealHand(deck, 4);
//     var score = scoreHand(hand);
//     var message = message(score);
//
//     $(this).find("displayHand").append(showHand(hand));
//     $(this).find("displayMessage").append(message);
//   });
//
//
// });
