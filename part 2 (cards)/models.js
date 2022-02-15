"use strict";

class Deck{

    constructor(){
        this.discard = [];
        this.cards = [];
        this.deckId = "";
    }

    /** console logs the passed card, suit and value */
    printCard(card){
        const cardVal = card.value;
        const cardSuit = card.suit;

        console.log("cardVal", cardVal, "cardSuit", cardSuit);
        console.log("deck id: ", this.deckId);
    }

    /** requests new deck from deckofcards api */
    async getAndShuffleDeck(){
        const resp = await axios.get(`${BASE_URL}/new/draw/?count=52`);
        this.deckId= resp.data.deck_id;
        console.log(resp.data.cards);
        this.cards = resp.data.cards;
    }

    /** pops card from cards, prints and returns a card */
    drawCard(){
        const card = this.cards.pop();
        console.log(card);
        this.discard.push(card)
        this.printCard(card);

        return card;
    }

    refreshCards(){
        //TODO get discarded cards into regular deck of cards
    }
}