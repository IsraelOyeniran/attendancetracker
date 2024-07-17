//This is where I get the element from the id's
const manCountSpan = document.getElementById("manCount");
const womanCountSpan = document.getElementById("womanCount");
const infantCountSpan = document.getElementById("infantCount");
let manCount = 0;
let womanCount = 0;
let infantCount = 0;

function countButton(count, span) {
    span.textContent = manCount;
    span.textContent = womanCount;
    span.textContent = infantCount; 

    return 1;
}


//I get the button element from the id's and add a click event listener to it.
const manButton = document.getElementById("manButton");
const womanButton = document.getElementById("womanButton");
const infantButton = document.getElementById("infantButton")

manButton.addEventListener('click', function() {
    manCount = manCount + countButton(manCount, manCountSpan);
});

womanButton.addEventListener('click', function() {
    womanCount = womanCount + countButton(womanCount, womanCountSpan);
});

infantButton.addEventListener('click', function() {
    infantCount = infantCount + countButton(infantCount, infantCountSpan);
});


