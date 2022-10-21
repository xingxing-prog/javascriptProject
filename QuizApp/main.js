var start = document.querySelector("#start");
var modal = document.querySelector(".modal");


var questions = [];
let q1 ={
    question: "What does CSS stand for?", 
    choices:[{letter:"A. ", content:"Computer Style Sheets"},
             {letter:"B. ", content: "Creative Style Sheets"},
             {letter:"C. ", content:"Cascading Style Sheets"},
             {letter:"D. ", content:"Colorful Style Sheets"}],
    answer: "C"
};

let q2 ={
    question: "Which HTML tag is used to define an internal style sheet?", 
    choices:[{letter:"A. ", content:"<style>"},
             {letter:"B. ", content: "<script>"},
             {letter:"C. ", content:"<headStyle>"},
             {letter:"D. ", content:"<css>"}],
    answer: "A"
};

let q3 ={
    question: "Which property is used to change the background color??", 
    choices:[{letter:"A. ", content:"color"},
             {letter:"B. ", content: "bgcolor"},
             {letter:"C. ", content:"background-color"},
             {letter:"D. ", content:"bgColor"}],
    answer: "C"
};





questions.push(q1);
questions.push(q2);
questions.push(q3);


start.addEventListener("click", ()=>{
    console.log("It's clicked");
    count = 1;

    modal.style.display="none";

    var item = questions.pop();
    questions.push(item);
    console.log(item);
    
    var container = document.createElement("div");
    container.setAttribute("class", "card");

    var number = document.createElement("span");
    number.setAttribute("class", "number");
    number.textContent = `Question ${count}`;


    var question = document.createElement("h1");
    question.textContent = item.question;
    
    var title = document.createElement("div");
    title.setAttribute("class", "title");
    title.append(number);
    title.append(question);


    container.appendChild(title);

    var answers = document.createElement("ul");
    var choice = item.choices;
    for (let i=0; i<choice.length; i++){
        var option1 = document.createElement("li");
        option1.setAttribute("class", "option");
        var span1 = document.createElement("span");
        span1.textContent = choice[i].letter;
        span1.setAttribute("class", "choice");
        option1.appendChild(span1);
        var textNode = document.createTextNode(choice[i].content);
        option1.appendChild(textNode);
        answers.appendChild(option1);
    }

    var buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");
    var prev = document.createElement("button");
    prev.textContent ="Prev";
    prev.setAttribute("class", "prev");
    buttons.appendChild(prev);
    var next = document.createElement("button");
    next.textContent = "Next";
    next.setAttribute("class", "next");
    buttons.appendChild(next);
   

    container.appendChild(answers);
    container.appendChild(buttons);
   
    
  
    document.body.appendChild(container);
   
    


})