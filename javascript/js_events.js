/* JAVASCRIPT EVENTS CHEAT SHEET */

//DOM on-event handlers
window.onload = () => {
  //window loaded
};

//Commonly used in handling XHR requests (research)
const xhr = new XMLHttpRequest();
xhr.addEventListener = () => {
  //..do something
};

/*Check if a handler is already assigned to a property using if 
('onsomething' in window) */

/*Modern way of adding an event that allows to */
window.addEventListener("load", () => {});

