"use strict";

const NUMS_API_BASE = "http://numbersapi.com";

const $results = $("#results");
console.log($results);

async function luckyNumFact(num){
    const resp = await axios.get(`${NUMS_API_BASE}/${num}?json`);
    //Make sure you get back JSON by including the json query key, specific to this API. (?json at the end)
    console.log(resp.data.text);
    // $results.text(`${resp.data.text}`);



    //can also use :
    let $luckyNumFact = $(`<p>${resp.data.text}</p>`);
    console.log("$luckyNumFact", $luckyNumFact);
    $results.append($luckyNumFact);

}

/** This function  */
async function getNumFactsInRange(min, max){

    const resp = await axios.get(`${NUMS_API_BASE}/${min}..${max}`)

    for(let num in resp.data){
        $results.append(`<p>${resp.data[num]}</p>`);
    }

}

async function getManyNumFacts(num){
    const factPromise1 = axios.get(`${NUMS_API_BASE}/${num}?json`);
    const factPromise2 = axios.get(`${NUMS_API_BASE}/${num}?json`);
    const factPromise3 = axios.get(`${NUMS_API_BASE}/${num}?json`);
    const factPromise4 = axios.get(`${NUMS_API_BASE}/${num}?json`);

    const facts = [
        await factPromise1,
        await factPromise2,
        await factPromise3,
        await factPromise4]

    console.log(facts);

    for(let fact of facts){
        $results.append(`<p>${fact.data.text}</p>`);
    }
}