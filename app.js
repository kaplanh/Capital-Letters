const textarea = document.querySelector("#textarea");
const btn = document.querySelector("#btn");
const div = document.querySelector("div");

btn.addEventListener("click", () => {
  const p = document.createElement("p");
  div.appendChild(p);
  const text = document.createTextNode(capitalLetter(textarea.value));
  p.appendChild(text);
  textarea.focus();
  textarea.value = "";
});

//?map ile
const capitalLetter = (sentence) => {
  sentence = sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return sentence;
};

//?fonksiyon for ile  böylede yazilabilirdi
// const convert = (sentence) => {
//   const words = sentence.split(" ");
//   let newSentence = "";
//   for (let i of words) {
//     newSentence += i[0].toUpperCase() + i.slice(1) + " ";
//   }
// };

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  } else if (e.key === "Delete") {
    const x = (textarea.value = "");
  } else if (e.key === "Backspace") {
    x = x.slice(0, -1);
  } else if (e.key === "Escape") {
    x = "";
  }
});
