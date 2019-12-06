var homepage = document.querySelector("#homepage");

//Landing Pages
var htmlLanding = document.querySelector("#html-landing");
var cssLanding = document.querySelector("#css-landing");
var jsLanding = document.querySelector("#js-landing");

//Quizzes
var htmlQuiz = document.querySelector('#html-quiz');
var cssQuiz = document.querySelector('#css-quiz');
var jsQuiz = document.querySelector('#js-quiz');

//Questions
var htmlQues = document.querySelectorAll(".html-ques");
// var cssQues = cssQuiz.lastElementChild;
// var jsQues = jsQuiz.lastElementChild;

var btns = document.querySelector("#all-btns");
var startBtns = document.querySelectorAll("button[name=startBtn]");


btns.addEventListener("click", function(event){

     var target = event.target;
     if(target.matches('button')){

          homepage.style.display = "none";

          if(target.textContent === "HTML Quiz"){
               htmlLanding.classList.remove("hide");
          }
          else if(target.textContent === "CSS Quiz"){
               cssLanding.classList.remove("hide");
          }
          else if(target.textContent === "JS Quiz"){
               jsLanding.classList.remove("hide");
          }
     }
});

for (var i = 0; i < startBtns.length; i++) {
     startBtns[i].addEventListener("click", function(event){

          var parent = event.target.parentElement;
          parent.classList.add("hide");

          if(parent.id === 'html-landing'){
               htmlQuiz.classList.remove("hide");
          }
          else if (parent.id === 'css-landing') {
               cssQuiz.classList.remove("hide");
          }
          else if (parent.id ===  'js-landing'){
               jsQuiz.classList.remove("hide");
          }
     })
}

for (var i = 0; i < htmlQues.length; i++) {

     var option = htmlQues[i].lastElementChild;
     console.log(option);

     var eachOption = document.querySelectorAll("label");
     console.log(eachOption);
     
}
