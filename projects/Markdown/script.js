const editor = document.querySelector("#editor");
const preview = document.querySelector("#preview");

data = `
# This is a Markdown Editor
## Project by Leo Ojigbo
View my Profile [LinkedIn](https://www.linkedin,com/in.iroro1 ).

***Trying out Inline***   
\`json
{
    "name":"Leo",
    "age":25
}
\`

### The spaces before and after alert creates the pre tag
\`

    4+4

\`
> A ul below:

* First item
* Second item

> Blockquote

![Philadelphia's Magic Gardens. This place was so cool!](data:image/jpeg;base64,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 "A beuatiful nigth sky")

I just love **bold text**.
`;

const checkKey = e => {
  e.which === 13 || e.keyCode === 13 ? true : false;
};
const fillOutput = e => {
  editor.textContent = data;
  preview.innerHTML = marked(data);
  //   console.log(e.which);
  if (data === "") {
    console.log("Empty");
  } else {
    if (e.target === "\\") {
      console.log("Enter pressed");
      preview.innerHTML = "<br>";
    } else {
      preview.innerHTML = marked(e.target.value);
    }
  }
  //   data = "";
};

editor.addEventListener("input", fillOutput);

window.addEventListener("load", fillOutput);
