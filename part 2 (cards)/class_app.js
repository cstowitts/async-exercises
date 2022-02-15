"use strict";

const BASE_URL = "http://deckofcardsapi.com/api/deck";

/** renders card in the dom */
function addCardHTML(card){
    $("#cards").append(`<img src=${card.image}>`);
}

/** draws a card from deck, renders in DOM */
async function addCard(){
    const card = deck.drawCard()
    addCardHTML(card);
}

const deck = new Deck();
deck.getAndShuffleDeck()

$("#draw-card").on("click", addCard);