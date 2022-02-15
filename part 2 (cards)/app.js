"use strict";

const BASE_URL = "http://deckofcardsapi.com/api/deck";

let DECK_ID;


function consoleCard(card){
    //shuffle deck
    const cardVal = card.value;
    const cardSuit = card.suit;

    console.log("cardVal", cardVal, "cardSuit", cardSuit);

    console.log("deck id: ", DECK_ID);
}

async function shuffleDeck(){
    const resp = await axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`);
    DECK_ID = resp.data.deck_id;
    //DECK_ID =getNewDeck()

    //return deckId;
}

async function drawOneCard(){
    const resp = await axios.get(`${BASE_URL}/${DECK_ID}/draw/?count=1`);

    // const cardVal = resp.data.cards[0].value;
    // const cardSuit = resp.data.cards[0].suit;

    return resp.data.cards[0];
}

function addCardHTML(card){
    $("#cards").append(`<img src=${card.image}>`);
}

async function addCard(){
    card = await drawOneCard();
    consoleCard(card);
    addCardHTML(card);
}

shuffleDeck();

$("#draw-card").on("click", addCard);