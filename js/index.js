//this will use your function to write information into the index.html
a = prompt('Enter the first number');
b = prompt('Enter the second number');
answer = addition(a,b);
var myHeading = document.querySelector('h1');
myHeading.textContent = answer;

