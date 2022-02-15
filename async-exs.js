"use strict";

const NUMS_API_BASE = "http://numbersapi.com";

const $results = $("#results-container");

async function luckyNumFact(num){
    const resp = await axios.get(`${NUMS_API_BASE}/${num}?json`); 
    //Make sure you get back JSON by including the json query key, specific to this API. (?json at the end)
    console.log(resp.data.text);
    // $results.text(`${resp.data.text}`);
    console.log("$results: ", $results);


    //can also use :
    let $luckyNumFact = $(`<p>${resp.data.text}</p>`);
    console.log("$luckyNumFact", $luckyNumFact);
    $results.append($luckyNumFact);
    
}