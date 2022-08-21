console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Player1',
    hand: null,
    score: 0
  },
  {
    name: 'Player2',
    hand: null,
    score: 0
  },
  {
    name: 'Player3',
    hand: null,
    score: 0
  },
  {
    name: 'Player4',
    hand: null,
    score: 0
  }
];

var rank = ['Ace', 'King', 'Queen', 'Jack', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];

function createDeck() {
  var deck = [];
  var card = { suits: '', rank: '' };
  for (var i = 0; i < suits.length; i++) {
    for (var x = 0; x < rank.length; x++) {
      card.suits = suits[i];
      card.rank = rank[i];
      deck.push(card);
      card = { suits: '', rank: '' };
    }
  }
  return deck;
}

function shuffleDeck(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var x = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[x];
    array[x] = temp;
  }
  return array;
}

console.log('create Deck:', createDeck());
var gameDeck = createDeck;
console.log('shuffled deck:', shuffleDeck(gameDeck));
var shuffledGameDeck = shuffleDeck(gameDeck);

function dealCards(deck) {
  var cards = [];
  for (var i = 0; i < players.length; i++) {
    cards.push(deck.pop());
    cards.push(deck.pop());
    players[i].hand = cards;
    cards = [];
  }
  return deck;
}

console.log('deck after dealCards:', dealCards(shuffledGameDeck));

function calculateScore() {
  for (var i = 0; i < players.length; i++) {
    for (var x = 0; x < players[i].hand.length; x++) {
      if (players[i].hand[x].rank === 'Ace') {
        players[i].score += 11;
      } else if (players[i].hand[x].rank === 'King' || players[i].hand[x].rank === 'Queen' || players[i].hand[x].rank === 'Jack') {
        players[i].score += 10;
      } else {
        players[i].score += parseInt(players[i].hand[x].rank);
      }
    }
  }
}

calculateScore();
