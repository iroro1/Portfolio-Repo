let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randbtn = document.querySelector("button");

let carr = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
];

let o1 = color1.getAttribute("value");
let o2 = color2.getAttribute("value");
// return rn;

// function rand() {
//   o1 = "#";
//   o2 = "#";
//   for (let i = 0; i < 6; i++) {
//     let rn = Math.floor(Math.random(carr) * carr.length + 1);
//     if (carr[rn] === undefined) {
//       rn = 3;
//       o1 += carr[rn];
//       continue;
//     }
//     o1 += carr[rn];
//   }
//   for (let i = 0; i < 6; i++) {
//     let rn = Math.floor(Math.random(carr) * carr.length + 1);
//     if (carr[rn] === undefined) {
//       rn = 3;
//       o2 += carr[rn];
//       continue;
//     }
//     o2 += carr[rn];
//   }
//   console.log(o1, o2);
//   initial(o1, o2);
// }

function rand() {
  o1 = "rgba(";
  o2 = "rgba(";
  for (let i = 0; i < 4; i++) {
    let rn = Math.floor(Math.random() * 257);
    i === 3 ? (o1 += (Math.random() * 2).toFixed(2) + ")") : (o1 += rn + ",");
  }
  for (let i = 0; i < 4; i++) {
    let rn = Math.floor(Math.random() * 257);
    i === 3 ? (o2 += (Math.random() * 2).toFixed(2) + ")") : (o2 += rn + ",");
  }
  console.log(o1, o2);
  initial(o1, o2);
}

function initial(c1, c2) {
  //   console.log("Loaded..");
  body.style.background = "linear-gradient(to right, " + c1 + ", " + c2 + ")";
  css.textContent = body.style.background + ";";
}
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

window.addEventListener("load", initial(o1, o2));

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randbtn.addEventListener("click", rand);
