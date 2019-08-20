# memoryGame-VanillaJs
Making a memory game to learn Vanilla JavaScript. Here is the link to the article I used to create 
it: https://www.freecodecamp.org/news/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae/

index.html notes:
Structure:
- All elements (all the cards) in the body are in the section class memeory-game
- Section div means: content inside is grouped, relates to a single theme

- Each card has its own div with a class of memory-card and data-name of the picture on the card
- Each card in that div has a picture on the front(with the class front-face) and back(with class back-face)


Styles.css notes:
-Viewport: user's visible area of a web page. Varies with the device, and will be smaller on a mobile phone than 
on a computer screen
-Vh and vw: Relative to 1% of the width or height of the viewport
-Display property specifies the display behavior (the type of rendering box) of an element
-CSS Flexbox Layout Module: first define a flex container(memory-game), flex-wrap: wrap specifies that the flex items 
will wrap if necessary

JS Notes:
- var: has function level scoping and can change the value reference
- let: has block level scoping and can change the value reference
- const: has block level scoping but cannot change the value reference, but can change propeties of value reference

Making card flip:
- Add class flip to elements: select all memory-card elements with document.querySelectorAll and them loop though 
all of them and attach an event listener to them and call flipCard function when pressed
- this variable = card that was clicked
- 

