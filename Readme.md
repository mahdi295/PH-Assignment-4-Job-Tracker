### Difference between getElementById, getElementByClassName, and quwrySelector/querySelectorAll:
1. getElementById: We use it for return single element which element has ID

2. getElementByClassName: We use it for return HTMLCollection which has class name

3. querySelector: We use it for return first matching element using CSS selector

4. querySelectorAll: We use it for return NodeList using CSS selector



### Creating and Inserting a New Element into the DOM:
html :
<div id = "container"></div>

js :
let container=documnet.getElementById("container)

let newDiv = document.createElement("div")
newDiv.innerText="New element create"
newCard.classList.add("new-div")

container.append(newDiv)



### Event Bubbling and its work
Event Bubbling is a behavior in the DOM where clicking an element,the event first runs on that element, then bubbles up to its parent, then the parent's parent and so on.

How it work:
html:
<div id="parent">
  <button id="child">Click Me</button>
</div>

js:
document.getElementById("parent").addEventListener("click", function () {
  console.log("parent clicked");
});

document.getElementById("child").addEventListener("click", function () {
  console.log("button clicked");
});


### Event Delegation in Javascript and why its helpful
Event Delegation attach a single event listener to a parent element to handle events on its child element using bubbling

Its helpful because:
1. It handles dynamiclly added elements without re-attaching listener
2. It improves performance by reducing the number of listeners



### Difference between preventDefault() and stopPropagation()
1. preventDefault(): It stops the browsers default action.Example: It prevents a form from submitting a link from navigating

2. stopPropagation(): It stops the event from bubbling up.Example: It prevents parent handlers from firing after child handler runs