const fetch = require("node-fetch");
var url ="https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

async function getData(){

    const response = await fetch(url,
    {
        method: "GET"
    });

    const data = await response.json();

    console.log(data);
    console.log(data.question);
}

getData(url);