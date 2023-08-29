const spiner = document.querySelector(".spiner");

window.onload(
  setTimeout(function () {
    spiner.classList.add("none");
    spiner.classList.remove("absolute");
  }, 5000)
);
