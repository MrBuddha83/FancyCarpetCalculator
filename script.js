const widthElement = document.getElementById('width');
const lengthElement = document.getElementById('length');
const areaElement = document.getElementById('area-box');

function showCarpetArea(width, length, area) {
  let widthPx;
  let lengthPx;
  
  if (width > length) {
    widthPx = 300;
    lengthPx = Math.max(20, (length / width) * 300); 
  } else {
    widthPx = (width / length) * 300;   
    lengthPx = 300;
  }

  areaElement.style.opacity = 1;
  window.setTimeout(()=> {
    widthElement.innerHTML = width;
    widthElement.style.opacity = 1;
    areaElement.style.width = widthPx + "px";
    window.setTimeout(()=> {
      lengthElement.innerHTML = length;
      lengthElement.style.opacity = 1;
      areaElement.style.height = lengthPx + "px";
      window.setTimeout(()=> {
        areaElement.style.fontSize = Math.min(lengthPx, 60) + "px";
        areaElement.style.lineHeight = lengthPx + "px";
        areaElement.innerHTML = area;
      }, 700);
    }, 700);
  }, 700);
}

/* 
The showCarpetArea function takes three values:
	1. The width of the carpet
	2. The length of the carpet
	3. The area of the carpet

Try passing different values to showCarpetArea() 
to see how it changes the visualization!
*/

// Your code here
// 2 prompts for width and length inside the Number() function to convert to numnbers here
let width = Number(prompt("What is the width of the room in feet?"));
let length = Number(prompt("What is the length of the room in feet?"));
// Storing the value of area here
let area = length * width;
// Changed the function to output the user numbers here
showCarpetArea(width, length, area);