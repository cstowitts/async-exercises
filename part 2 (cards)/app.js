"use strict";

const BASE_URL = "http://deckofcardsapi.com/api/deck";

let DECK_ID;


async function consoleCard(){
    //shuffle deck
    DECK_ID = await shuffleDeck();
    console.log("deck id: ", DECK_ID);

    //draw a card from the shuffled deck
    drawOneCard(DECK_ID);

}

async function shuffleDeck(){
    const resp = await axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`);

    const deckId = resp.data.deck_id;

    return deckId;
}

async function drawOneCard(deckId){
    const resp = await axios.get(`${BASE_URL}/${deckId}/draw/?count=1`);

    const cardVal = resp.data.cards[0].value;
    const cardSuit = resp.data.cards[0].suit;

    console.log(`${cardVal} of ${cardSuit}`);

}