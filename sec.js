
// for change menu
let brek = document.getElementById("break");
let launch = document.getElementById("launch");
let dinner = document.getElementById("dinner");

let br = document.getElementById("bre");
let lau = document.getElementById("lau");
let din = document.getElementById("din");


// var bt1=document.getElementById('bt-br1') ;
// var liquid1=document.getElementById('liquid1');
// var sp1=document.getElementById('sp-br1');
// var bt2=document.getElementById('bt-br2') ;
// var liquid2=document.getElementById('liquid2');
// var sp2=document.getElementById('sp-br2');
// var bt3=document.getElementById('bt-br3') ;
// var liquid3=document.getElementById('liquid3');
// var sp3=document.getElementById('sp-br3');


brek.onclick = function () {
  lau.style.display = "none";
  din.style.display = "none";
  br.style.display = "grid";

  //  bt1.classList.add("button");
  //  liquid1.classList.add("liquid");
  //  sp1.classList.add("btn-txt");
  
};

launch.onclick = function () {
  br.style.display = "none";
  din.style.display = "none";
  lau.style.display = "grid";
  brek.style.border = 'none' ;
};
dinner.onclick = function () {
  lau.style.display = "none";
  br.style.display = "none";
  din.style.display = "grid";
  brek.style.border = 'none' ;
};






let scrole = document.getElementById("up");
window.onscroll = function () {
 

 
  if (scrollY > 300) { 
    if(screenx>600){
    scrole.style.display = "block";
   }
  } else {
    
    scrole.style.display = "none";
    
  }
};
scrole.onclick = function () {
  scroll({
    let: 0,
    top: 0,
    behavior: "smooth",
  });
};
 


let bare=document.getElementById('bare');
let bar=document.getElementById('bar');
let ex=document.getElementById('ex');

bare.onclick=function(){

bar.style.display='flex';
}
ex.onclick=function(){

bar.style.display='none';
}




var name=document.getElementById('name');
var email=document.getElementById('email');
var date=document.getElementById('date');
var number=document.getElementById('number');
var special=document.getElementById('special');
var send=document.getElementById('send');

// save data in local storage

if (localStorage.dda != null) {
  data = JSON.parse(localStorage.dda);
} else {
  let data = [];
}

send.onclick = function sen() {
  let dat = {
    nam: name.value,
    email: email.value,
    date: date.value,
    number: number.value,
    special: special.value,
  };
  data.push(dat);
  localStorage.setItem("dda", JSON.stringify(data));
  console.log(data);
  showdata();
};



//  show data

function showdata() {
  let table = "";

  for (let i = 0; i < data.length; i++) {
    table = data[i];

    table += `
        <tr>
        <td>${i}</td>
        <td>${data[i].nam}</td>
        <td>${data[i].email}</td>
        <td>${data[i].password}</td>
        <td>${data[i].gender}</td>
        <td>${data[i].level}</td>
        <td>${data[i].skills}</td>
        </tr> `;
  }
 
  console.log(table)
}


var prel=document.getElementById('prel');
var cont=document.getElementById('cont');

window.addEventListener('load',van)

function van(){
  setTimeout(function(){
    prel.style.display='none';
    cont.style.display='block';
  },8000)
 
}


