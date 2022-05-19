const btn = document.querySelector(".title__wrapper_btn");

const close = document.querySelector(".demo__close");

const demo = document.querySelector(".demo");

console.log(close);
console.log(btn);

close.addEventListener("click", () => {
  demo.classList.remove("close_none");
});

btn.addEventListener("click", () => {
  demo.classList.add("close_none");
});
