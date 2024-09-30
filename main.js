let bold = document.getElementById('bold');
let italic = document.getElementById('italic');
let leftSide = document.getElementById('leftSide');
let center = document.getElementById('center');
let rightSide = document.getElementById('rightSide');
let upperCase = document.getElementById('upperCase');
let lowerCase = document.getElementById('lowerCase');
let capitalizeButton = document.getElementById('capitalize'); 
let clear = document.getElementById('clear');

let fontColor = document.getElementById('fontColor');
let bgColor = document.getElementById('bgColor');

let textSize = document.getElementById('textSize');
let fontFamily = document.getElementById('fontFamily');

let text = document.getElementById('print');

// Bold text
bold.addEventListener('click', () => {
  text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
});

// Italic text
italic.addEventListener('click', () => {
  text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
});

// Align text to the left
leftSide.addEventListener('click', () => {
  text.style.textAlign = "left";
});

// Center text
center.addEventListener('click', () => {
  text.style.textAlign = "center";
});

// Align text to the right
rightSide.addEventListener('click', () => {
  text.style.textAlign = "right";
});

// Convert text to uppercase
upperCase.addEventListener('click', () => {
  text.value = text.value.toUpperCase(); 
});

// Convert text to lowercase
lowerCase.addEventListener('click', () => {
  text.value = text.value.toLowerCase(); 
});

// Capitalize each word
capitalizeButton.addEventListener('click', () => {
  let words = text.value.split(' ');
  let capitalizedText = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
  text.value = capitalizedText;
});

// Clear text
clear.addEventListener('click', () => {
  text.value = '';
});

// Change font family
fontFamily.addEventListener('change', function() {
  let selectedFont = fontFamily.value;
  text.style.fontFamily = selectedFont;
});

// Change font size
textSize.addEventListener('change', function() {
  let selectedSize = textSize.value;
  text.style.fontSize = selectedSize;
});

// Change font color
fontColor.addEventListener('input', function() {
  let selectedColor = fontColor.value;
  text.style.color = selectedColor;
});

// Change background color
bgColor.addEventListener('input', function() {
  let selectedBgColor = bgColor.value;
  text.style.backgroundColor = selectedBgColor;
});
