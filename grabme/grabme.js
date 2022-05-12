const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "mouse is here!";
  title.style.color = "aqua";
}

function handleMouseLeave() {
  title.innerText = "mouse is gone!";
  title.style.color = "yellowgreen";
  console.log("mouse is gone!");
}

function handleResize() {
  title.innerText = "you just resized!";
  title.style.color = "deeppink";
}

function handleRightClick() {
  title.innerText = "that was a right click!";
  title.style.color = "teal";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleResize);
document.addEventListener("contextmenu", handleRightClick);
