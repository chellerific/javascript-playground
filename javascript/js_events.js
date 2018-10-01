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

/*Modern way of adding an event that allows to register as many handlers
as we need. Intercept "global events". */
window.addEventListener("load", () => {});

/*The Event object: consists of 
- DOM element target
- event type 
- etc. */
const link = document.getElementById('my-link')
link.addEventListener('click', event => {
  //link clicked
})


