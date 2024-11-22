let buttons = document.querySelectorAll(".buttons");
let counter = document.querySelector(".counter");
let count = 0;

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    count++;
    counter.textContent = "COUNT IS : " + count;
  });
});
