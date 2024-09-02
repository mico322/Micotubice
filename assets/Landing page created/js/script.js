var answers = document.querySelectorAll(".con2-select");

function toNext(ele) {
    if(ele.value == "0"){
        document.getElementsByClassName("con2-div")[0].classList.add("animate__animated");
        document.getElementsByClassName("con2-div")[0].classList.add("animate__fadeOut");

        setTimeout(function () {
            document.getElementsByClassName("con2-div")[0].style.display = "none";
        }, 490)
    }
    
    var ancestor = ele.parentElement.parentElement;
    var next = ancestor.nextElementSibling;
    ancestor.classList.add("animate__animated");
    ancestor.classList.add("animate__fadeOut");
    setTimeout(function () {
        ancestor.style.display = "none";
    }, 490)
    setTimeout(function () {
        next.classList.add("animate__animated");
        next.classList.add("animate__fadeIn");
        next.style.display = "block"
    }, 490)
}


var states = [document.getElementById("con2-progress-state1"), 
          document.getElementById("con2-progress-state2"), 
          document.getElementById("con2-progress-state3"), 
          document.getElementById("con2-progress-state4")];

function drawloader(){
    document.getElementById("con2-div").style.display = "none";
    document.getElementsByClassName("con2-disclaimer")[0].style.display = "none";
    setTimeout(function () {
        states[0].classList.add("animate__animated");
        states[0].classList.add("animate__fadeOut");
    },2000);
    setTimeout(function () {
        states[0].style.display="none";
        states[1].style.display="block";
        states[1].classList.add("animate__animated");
        states[1].classList.add("animate__fadeIn");
    },2500);

    setTimeout(function () {
        states[1].classList.add("animate__animated");
        states[1].classList.add("animate__fadeOut");
    },4300);
    setTimeout(function () {
        states[1].style.display="none";
        states[2].style.display="block";
        states[2].classList.add("animate__animated");
        states[2].classList.add("animate__fadeIn");
    },4700);

    setTimeout(function () {
        states[2].classList.add("animate__animated");
        states[2].classList.add("animate__fadeOut");
    },6500);
    setTimeout(function () {
        states[2].style.display="none";
        states[3].style.display="block";
        states[3].classList.add("animate__animated");
        states[3].classList.add("animate__fadeIn");
    },6900);

    setTimeout(function () {
        states[3].classList.add("animate__animated");
        states[3].classList.add("animate__fadeOut");
        document.getElementById("verif-content").classList.add("animate__animated");
        document.getElementById("verif-content").classList.add("animate__fadeOut");
    },8000);
    
    setTimeout(function () {
        document.getElementById("verif-content").style.display = "none";
        $('#p_modal1').modal('show');
        document.getElementById("box-content").style.display = "block";
        document.getElementById("box-content").classList.add("animate__animated");
        document.getElementById("box-content").classList.add("animate__fadeIn");
    },8500);
}


for (var i = 0; i < answers.length; i++) {
    if (i < answers.length-4){
        answers[i].onclick = function () {
            toNext(this)
        }
    } else {
        answers[i].onclick = function () {
            toNext(this)
            document.getElementsByClassName("con2-disclaimer")[0].classList.add("animate__animated");
            document.getElementsByClassName("con2-disclaimer")[0].classList.add("animate__fadeOut");
            document.getElementById("con2-div").classList.add("animate__animated");
            document.getElementById("con2-div").classList.add("animate__fadeOut");
            setTimeout(function () {
                drawloader()
            }, 490)
        }
    }
}










/* const qhed = document.querySelectorAll(".qeus-head") || []; */
const ques = document.querySelectorAll(".qeus-text") || [];
const qnum = document.querySelectorAll(".qeus-numb") || [];

for(var qn = 0; qn < qnum.length; qn++){
    /* qhed[qn].innerText = "SHEIN Shopper Experience Survey"; */
    qnum[qn].innerText = "Question "+(qn+1)+" on "+qnum.length+":";
}

let qtexxtt = [
    "How often do you see Samsung ads?",
    "Frequently",
    "Occasionally",
    "Rarely",
    "Never",
    "Have you ever purchased a Samsung product before?",
    "Yes",
    "No",
    "What is the primary reason you shop at Samsung?",
    "Quality of products",
    "Brand reputation",
    "Competitive prices",
    "Innovation and technology",
    "Which Samsung product do you use the most in your daily life?",
    "Samsung smartphone",
    "Samsung TV",
    "Samsung laptop/tablet",
    "Samsung home appliances",
    "None",
    "Are you aware of the Samsung S24 product?",
    "Yes",
    "No",
    "Have you considered purchasing the Samsung S24?",
    "Yes",
    "No",
    "What feature of the Samsung S24 do you find most appealing?",
    "Display quality",
    "Performance",
    "Price",
    "Brand trustworthiness",
    "How likely are you to recommend Samsung products to friends and family?",
    "Very likely",
    "Likely",
    "Unlikely",
    "Very unlikely"
];

var dsq = 0;
var incq = 0;

while(dsq < qtexxtt.length){
    ques[dsq].innerText = qtexxtt[dsq];
    dsq++;
}