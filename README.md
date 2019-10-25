# memoryGame-VanillaJs
Making a memory game to learn Vanilla JavaScript. Here is the link to the article I used to create 
it: https://www.freecodecamp.org/news/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae/

Styles.css Notes:
- Viewport: user's visible area of a web page. Varies with the device, and will be smaller on a mobile phone than 
on a computer screen
- Vh and vw: Relative to 1% of the width or height of the viewport
- Display property specifies the display behavior (the type of rendering box) of an element
- CSS Flexbox Layout Module: first define a flex container(memory-game), flex-wrap: wrap specifies that the flex items 
will wrap if necessary


Making the Cards Flip:
- Add class flip to elements: select all memory-card elements with document.querySelectorAll, loop though 
all of them, attach an event listener to them and call flipCard function when pressed

What I did:
- Copied code from: https://marina-ferreira.github.io/memory-game/
- Added score feature, attempts feature, new game button, redo button, and message feature
- Changed the images to animals and changed the style with css
