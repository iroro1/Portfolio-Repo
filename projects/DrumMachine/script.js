let Q = document.querySelector("#Q");
let W = document.querySelector("#W");
let E = document.querySelector("#E");
let A = document.querySelector("#A");
let S = document.querySelector("#S");
let D = document.querySelector("#D");
let Z = document.querySelector("#Z");
let X = document.querySelector("#X");
let C = document.querySelector("#C");

let q = document.querySelector("#q");
let w = document.querySelector("#w");
let e = document.querySelector("#e");
let a = document.querySelector("#a");
let s = document.querySelector("#s");
let d = document.querySelector("#d");
let z = document.querySelector("#z");
let x = document.querySelector("#x");
let c = document.querySelector("#c");

let display = document.querySelector("#display");

const rand = d => {
  let rn = Math.floor(Math.random() * d.length + 1);
  return rn;
};

const u = ["red", "blue", "green", "crimson", "maroon"];

const colChange = () => {
  //   setTimeout(u.forEach, 0.2);
  u.forEach(c => c);
};
const playTrack = e => {
  if (e.target.getAttribute("id") === "q") {
    display.textContent = "Alien Fx tone beats.";
    return Q.play();
  } else if (e.target.getAttribute("id") === "w") {
    display.textContent = "Some lovely frenzied beats to enlighten the soul";
    return W.play();
  } else if (e.target.getAttribute("id") === "e") {
    display.textContent = "Old Skool Soul Pride.";
    return E.play();
  } else if (e.target.getAttribute("id") === "a") {
    display.textContent = "Wahhhhhh Guitar ..........";
    return A.play();
  } else if (e.target.getAttribute("id") === "s") {
    display.textContent = "Lets rock and roll Boy slide Guitar";
    return S.play();
  } else if (e.target.getAttribute("id") === "d") {
    display.textContent = "Electric guitar Tight waka Tone..";
    return D.play();
  } else if (e.target.getAttribute("id") === "z") {
    display.textContent = "Cool night sky, slow ballad guitar.";
    return Z.play();
  } else if (e.target.getAttribute("id") === "x") {
    display.textContent = "Action time get ready for club groove...";
    return X.play();
  } else {
    display.textContent = "HipHop Bell and Harp...";
    return C.play();
  }
};

q.addEventListener("click", playTrack);
w.addEventListener("click", playTrack);
e.addEventListener("click", playTrack);
a.addEventListener("click", playTrack);
s.addEventListener("click", playTrack);
d.addEventListener("click", playTrack);
z.addEventListener("click", playTrack);
x.addEventListener("click", playTrack);
c.addEventListener("click", playTrack);
