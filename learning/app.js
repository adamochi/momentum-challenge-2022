const days = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(days);
// get item from array
console.log(days[4]);
// write the name of the variable then use square bracket to select the item,
days.push("sun");
console.log(days);
const dayy = ["potato", "nana"];

const title = document.getElementById("title");

console.dir(title);
title.innerText = "Got you!";
console.log(title.id);
console.log(title.className);

// To read html from js, we use document which has one function
// getElementById
// we will be getting the username and saying hello to the user
// whatever is on the html like elements, classname, id, innertext,autofocus, and you can change them with javascript.

const hellos = document.getElementsByClassName("hello");
console.log(hellos);
const tittle = document.getElementsByTagName("h1");
const tiitle = document.querySelector(".hello h1");
console.log(tiitle);
console.log(tittle);
// querrySelector only grabs the first element
const ttitle = document.querySelectorAll(".hello h1");
console.log(ttitle);
// querry selector allows you to use a CSS selector! so write it like: .someting
// can't get for example "(.hello h1)" with getElementById
title.innerText = "click me!";
// querySelector is the best one that allows you to get all the elements, just like css.

//  style of the element written in js
// title.style.color = "blue";

// most of the time in js you will be listening for events. like when i disconnect from the wifi or the user clicks on something.
function handleTitleClick() {
  title.style.color = "blue";
}
// don't want the functin to happen immediately so i will give the functin to the eventListener and it will handle the event. js will
title.addEventListener("click", handleTitleClick);
//we are specifying what event to run
// web api are the javascript -->
// HTMLHeadingElement mdn
