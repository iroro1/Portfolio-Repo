let text = document.querySelector("#text");
let author = document.querySelector("#author");
let nextBtn = document.querySelector("#new-quote");
let tweet = document.querySelector("#tweet-quote");
let body = document.querySelector("#body");

const rand = d => {
  let rn = Math.floor(Math.random() * d.length + 1);
  return rn;
};

const u = ["red", "blue", "green", "crimson", "maroon"];
// const i = [
//   "linear-gradient(to right, rgb(44, 88, 0), rgb(1, 178, 225));",
//   "linear-gradient(to right, rgba(239, 38, 65, 0.95), rgba(194, 125, 117, 0.02));",
//   "linear-gradient(to right, rgb(175, 253, 10), rgba(181, 251, 103, 0.88));",
//   "linear-gradient(to right, rgba(201, 239, 132, 0.19), rgba(5, 13, 200, 0.87));",
//   "linear-gradient(to right, rgba(25, 175, 255, 0.78), rgb(241, 72, 140));",
//   "linear-gradient(to right, rgba(200, 181, 12, 0.94), rgb(214, 73, 63));",
//   "https://images.unsplash.com/photo-1446457292373-a8e0bb763287?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
//   "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",

//   "https://images.unsplash.com/photo-1519329475180-feddc4230aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1513436158476-868ee8782fdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1534794067417-dce2680b2bb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
// ];

body.style.height = "100vh";
const changeBg = () => {
  const bg = rand(i);

  i[bg].includes("https")
    ? (body.style.background = `url(${i[bg]}) top left / cover no-repeat`)
    : (body.style.background = i[bg]);
};
const changeColor = () => {
  const c = rand(u);
  body.style.color = u[c];
};

br = document.createElement("br");
img = document.createElement("img");
img.setAttribute(
  "src",
  "https://i.ya-webdesign.com/images/transparent-welcome-gif-background-3.gif"
);
img.setAttribute("alt", "LOADING...");
img.setAttribute("width", "100px");

const api = async () => {
  let txt;

  text.appendChild(br);
  text.appendChild(img);
  const data = await fetch(`https://type.fit/api/quotes`).then(res =>
    res.json()
  );
  changeColor();
  // changeBg();
  if (data) {
    let i = rand(data);
    text.textContent = data[i].text;
    author.textContent = data[i].author;
    txt = data[i].text;
    tweet.setAttribute("href", `https://twitter.com/intent/tweet?text=${txt}`);
    changeBg();
  } else {
    text.textContent =
      "OOps sorry. \r The Server May be Down. Plese Try Again Later ...";
    author.textContent = "Server Error";
    txt = "The Server May be Down. Plese Try Again Later";
    tweet.setAttribute("href", `https://twitter.com/intent/tweet?text=${txt}`);
  }
};
window.addEventListener("load", api);
nextBtn.addEventListener("click", api);
