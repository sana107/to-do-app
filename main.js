let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
const txt1=document.getElementById("new_input");
const out1=document.getElementById("output1");


const saveTodo = (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  li.innerText = input.value;
  li.className = "list-group-item rounded-0";
  let btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.className = "btn btn-sm btn-danger rounded-0 float-end";
  out1.innerText=txt1.value;
  
  ul.appendChild(li);
  li.appendChild(out1);
  li.appendChild(btn);
  form.reset();
};

form.addEventListener("submit", saveTodo);

const removeTodo = (e) => {
  if (e.target.className.includes("btn-danger")) {
    let li = e.target.parentElement;
    if (window.confirm("Are You Sure?")) {
      ul.removeChild(li);
    }
  }
};

ul.addEventListener("click", removeTodo);



let a =0;


function myFunc() {
   
    
    if (a == 0) {
        document.body.style.background = "black";
        document.body.style.color = "white";
        a = 1;
    }
    else {
        document.body.style.background = "white";
        document.body.style.color = "black";
        a= 0;
    }

    
}        
 