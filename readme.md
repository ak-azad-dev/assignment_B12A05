### Question-1: What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
**getElementById :**
- Return a single element.
- Select element with a unique id.
- Example: `document.getElementById("id")`

**getElementsByClassName :**
- Return HTMLCollection like array.
- Select multiple elements with same class name.
- Example: `document.getElementsByClassName("className")`

**querySelector :**
- Return first matching element.
- Select element by css selectors.
- Example: `document.querySelector(".className")`

**querySelectorAll :**
- Return all matching elements.
- Select multiple elements by using css syntext.
- Example: `document.querySelectorAll("div > .className")`

### Question-2: How do you **create and insert a new element into the DOM**?
- By using `document.createElement()` and then add it with `.append()` method.
- Example:
`const newDiv = document.createElement("div");`
`newDiv.textContent = "Hello, world!";`
`document.body.appendChild(newDiv);`

### Question-3: What is **Event Bubbling** and how does it work?
- Event bubbling means that when an event happens on a child element, it `bubbles up` through its parents.
- Example: If we click a `<button>` inside a `<div>`, click event first runs `<button>`, then `<div>`, and then `<body>`, etc., all the way up to document.

### Question-4: What is **Event Delegation** in JavaScript? Why is it useful?
- **Listen for events on a parent element**, instead of adding listeners to many child elements individually. It takes advantage of event bubbling.
- Example:
`document.getElementById("parentList").addEventListener("click", function(e) {`
  `if (e.target.tagName === "LI") {`
    `console.log("Clicked on list item:", e.target.textContent);`
  `}`
`});`

### Question-5: What is the difference between **preventDefault() and stopPropagation()** methods?
**preventDefault :**
- Stops the default behavior of an element.
- Example: `Stop a form from submitting`

**stopPropagation :**
- Stops the event from bubbling up to parent elements.
