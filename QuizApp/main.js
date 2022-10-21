var start = document.querySelector("#start");
var modal = document.querySelector(".modal");

var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var options = document.querySelectorAll(".option");
var ul = document.querySelector("ul");


var questions = [];
let q1 ={
    question: "What does CSS stand for?", 
    choices:[{letter:"A. ", content:"Computer Style Sheets"},
             {letter:"B. ", content: "Creative Style Sheets"},
             {letter:"C. ", content:"Cascading Style Sheets"},
             {letter:"D. ", content:"Colorful Style Sheets"}],
    answer: "C. Cascading Style Sheets"
};

let q2 ={
    question: "Which HTML tag is used to define an internal style sheet?", 
    choices:[{letter:"A. ", content:"<style>"},
             {letter:"B. ", content: "<script>"},
             {letter:"C. ", content:"<headStyle>"},
             {letter:"D. ", content:"<css>"}],
    answer: "A. <style>"
};

let q3 ={
    question: "Which property is used to change the background color?", 
    choices:[{letter:"A. ", content:"color"},
             {letter:"B. ", content: "bgcolor"},
             {letter:"C. ", content:"background-color"},
             {letter:"D. ", content:"bgColor"}],
    answer: "C. background-color"
};





questions.push(q1);
questions.push(q2);
questions.push(q3);
var count = 1;
var correct = 0;


start.addEventListener("click", ()=>{
    console.log("It's clicked");
   

    modal.style.display="none";
     
    var item = questions.pop();
    questions.unshift(item);
    console.log(item);
    
    var main = document.createElement(main);
    main.setAttribute("class", "main");
    
    var container = document.createElement("div");
    container.setAttribute("class", "card");

    buildQuestions(main, item);
    console.log(count);
    
  
    document.body.appendChild(main);
  
    
   
})

function buildQuestions(main, item){
    
    
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
    //getAnswers(choice, answers, item);

   
    for (let i=0; i<choice.length; i++){
        var option1 = document.createElement("li");
      
        option1.setAttribute("class", "option");
        option1.disabled = false;
       
        var span1 = document.createElement("span");
        span1.textContent = choice[i].letter;
        span1.setAttribute("class", "choice");

        option1.appendChild(span1);
        var textNode = document.createTextNode(choice[i].content);

        option1.addEventListener("click", (e)=>{
           
            if(option1.disabled === false){
                if(e.target.textContent == item.answer){
                    console.log("It's equal");
                    e.target.style.backgroundColor ="green";
                    correct ++;
                    option1.disabled=true;
                        
                   
                }
                else{
                    e.target.style.backgroundColor ="red";
                    option1.disabled=true;
                   
                }
                
            }
           
        })

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

    next.addEventListener("click", ()=>{
        if(count < questions.length){
             count++;
             console.log(count);
             item = questions.pop();
             questions.unshift(item);
             console.log("it's next.");
             container.remove();
             
             buildQuestions(main, item);
        }
        else{
            main.style.display = "none";
            var result = document.createElement("div");
            result.setAttribute("class", "correct");
            var grade = document.createElement("p");
            
            grade.textContent = `The correct answers is ${correct} out of ${questions.length}`;
            var pass = document.createElement("p");
            
            if(correct > questions.length * 0.6){
                pass.textContent =`Congratulations !!! You passed the quiz`;
            }
            else{
                pass.textContent = `Unfortunately, you failed but you can always try again.`;
            }
            result.appendChild(grade);
            result.appendChild(pass);
            document.body.appendChild(result);
        }    

       
    })

    prev.addEventListener("click", ()=>{
        if(count > 1){
            count--;

            item = questions.pop();
            questions.unshift(item);
            console.log("it's next.");
            container.remove();
            
            buildQuestions(main, item);
        }
    })

     

    

    container.appendChild(answers);
    container.appendChild(buttons);

    main.appendChild(container);
    
   return main;
   
}

function getAnswers(choice, answers, item){
    for (let i=0; i<choice.length; i++){
        var option1 = document.createElement("li");
      
        option1.setAttribute("class", "option");
       
        var span1 = document.createElement("span");
        span1.textContent = choice[i].letter;
        span1.setAttribute("class", "choice");

        option1.appendChild(span1);
        var textNode = document.createTextNode(choice[i].content);
        option1.appendChild(textNode);

        console.log(option1.textContent);
        console.log(item.answer);
        console.log(option1.textContent == item.answer);

        
        answers.appendChild(option1);
        option1.addEventListener("click", ()=>{
            if(option1.textContent == item.answer){
                console.log("It's equal");
                  option1.style.backgroundColor ="green";
            }
        })

        

    }
    return answers;

}

