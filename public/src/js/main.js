$container = document.querySelector(".container-sm");
$inputRadioModel = document.querySelectorAll("input[name=modelRadio]");

let amount = 0;
let modelPrice = 0;

document.addEventListener("change", (event) => {
  if (event.target.type === "radio") {
    let currentPrice = Number(event.target.dataset.price);
    modelPrice = currentPrice
    // console.log(modelPrice);
  }
});


