// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const h5 = document.querySelector("h5");

const btns = document.querySelector(".buttons");
const plus = document.querySelector(".btn-success");
const minus = document.querySelector(".btn-warning");
const divide = document.querySelector(".btn-info");
const multiply = document.querySelector(".btn-danger");
const equal = document.querySelector(".btn-primary");
const cardHeader = document.querySelector(".card-header");

let res;

    input1.addEventListener('keyup', (e)=>{
        h5.innerText = "Put in Number2";
    });

    input2.addEventListener('keyup', (e)=>{
        h5.innerText = "Click +, -, ÷ or *";
    })

   btns.addEventListener('click', calc);
   
    function calc(e){
      const  a = +input1.value;
      const  b = +input2.value;
    h5.innerText = "Now press =";
    if(e.target == plus){
            res = a + b;  
    } else if(e.target == minus){
        res = a - b;
    } else if(e.target == divide){
        res = (a / b).toFixed(2);
    } else if(e.target == multiply){
        res = a * b;
    } 
    
    }

    equal.addEventListener("click", ()=> {
        cardHeader.innerText = "Vois La!";
        h5.innerText = `Result is ${res}`;
        input1.value = '';
        input2.value = '';
    }
    );

   
    