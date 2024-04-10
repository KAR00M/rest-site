let brek = document.getElementById("break");
let launch = document.getElementById("launch");
let dinner = document.getElementById("dinner");

let br = document.getElementById("bre");
let lau = document.getElementById("lau");
let din = document.getElementById("din");

brek.onclick = function () {
  lau.style.display = "none";
  din.style.display = "none";
  br.style.display = "grid";
  
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



let up=document.getElementById('up');


up.onclick=function(){
  this.scrollTo.up
}

let bare=document.getElementById('bare');
let bar=document.getElementById('bar');


bare.onclick=function(){

bar.style.display='flex';
}
bare.ondblclick=function(){

bar.style.display='none';
}
