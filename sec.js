// for change menu.

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
  brek.style.border = "none";
};
dinner.onclick = function () {
  lau.style.display = "none";
  br.style.display = "none";
  din.style.display = "grid";
  brek.style.border = "none";
};
// ======================================================================

// scroll bar

let scrole = document.getElementById("up");
window.onscroll = function () {
  if (scrollY > 300) {
    
      scrole.style.display = "block";
    
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

// ===============================================================


// nav bar change.

let bare = document.getElementById("bare");
let bar = document.getElementById("bar");
let ex = document.getElementById("ex");

bare.onclick = function () {
  bar.style.display = "flex";
};
ex.onclick = function () {
  bar.style.display = "none";
};


// =============================================================



 
// =================================================================

// preload shape.

var prel = document.getElementById("prel");
var cont = document.getElementById("cont");

window.addEventListener("load", van);

function van() {
  setTimeout(function () {
    prel.style.display = "none";
    cont.style.display = "block";
  }, 3000);
}
