const spiner = document.querySelector(".spiner");
const skeleton = document.querySelector(".skeleton");

window.onload(
  setTimeout(function () {
    spiner.classList.add("hidden");
    spiner.classList.remove("absolute");
  }, 5000)
);
window.onload(
  setTimeout(function () {
    skeleton.classList.add("hidden");
    skeleton.classList.remove("absolute");
  }, 10000)
);
