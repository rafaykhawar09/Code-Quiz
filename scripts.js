var main = document.querySelector("#main");
var homepage = document.querySelector("#landing-page");
var start = document.querySelector("#start");
var time = document.querySelector("#time");

var quesArr=[
     {
          ques: "What does HTML stands for?",
          ans: ["Hypertext Machine language", "Hypertext and links markup language", "Hypertext Markup Language", "Hightext machine language"],
          correctAns: "3",
     },

     {
          ques: "How is document type initialized in HTML5?",
          ans: ["<!DCOTYPE html>", "<DOCTYPE>", "<!DOCTYPE html>", "</DOCTYPE HTML>"],
          correctAns: "3",
     },

     {
          ques: "Which of the following HTML Elements is used for making any text bold?",
          ans: ["<p>", "<i>", "<li>", "<b>"],
          correctAns: "4",
     },

     {
          ques: "How many heading tags are there in HTML5?",
          ans: ["6","5","2","3"],
          correctAns: "1",
     },

     {
          ques: "Which of the following HTML element is used for creating an unordered list?",
          ans: ["<b>", "<ol>", "<ul>", "<p>"],
          correctAns: "3",
     }
];
var index = 0;
var timer = parseInt(time.textContent);

var timeInterval;

function startTime(){
     timeInterval = setInterval(function(){

          if(index === quesArr.length){
               clearInterval(timeInterval);
          }
          timer--;
          time.textContent = timer;

     }, 1000);
}

function createAndLoadQues(){
     var div = document.createElement("div");
     main.appendChild(div);
     div.setAttribute("class", "ques");

     var h1 = document.createElement("h1");
     div.appendChild(h1);
     h1.textContent = quesArr[index].ques;

     var btnsDiv = document.createElement("div");
     div.appendChild(btnsDiv);
     btnsDiv.setAttribute("class", "choices")

     var answers = quesArr[index].ans;

     for (var i = 0; i < answers.length; i++) {

          var btn = document.createElement("button");
          btnsDiv.appendChild(btn);
          btn.setAttribute("type", "button");
          btn.setAttribute("data-answer", (i+1));
          btn.textContent = answers[i];

          btn.addEventListener("click", function(){

               console.log(this.dataset.answer);
               console.log(quesArr[index].correctAns)

               if(this.dataset.answer === quesArr[index].correctAns){
                    alert("Awesome!!");
               }
               else{
                    alert("Wrong Answer!!")
                    timer -= 10;
               }
               this.parentElement.parentElement.classList.add("hide");
               index++;

               if(index !== quesArr.length)
                    createAndLoadQues();
          });

     }
};

start.addEventListener("click", function(){
     homepage.classList.add("hide");
     startTime();
     createAndLoadQues();
});
