//This is where I get the element from the id's
// const totalCountSpan = document.getElementById("totalCount");
const manCountSpan = document.getElementById("manCount");
const womanCountSpan = document.getElementById("womanCount");
const youngadultsCountSpan = document.getElementById("youngadultsCount");
const youngkidsCountSpan = document.getElementById("youngkidsCount");
const infantCountSpan = document.getElementById("infantCount");
// let totalCount = 0;
let manCount = 0;
let womanCount = 0;
let youngadultsCount = 0;
let youngkidsCount = 0;
let infantCount = 0;

function countButton(count, span) {
    count = count+1;
    span.textContent = count;
    return count;
}

// Function to update the total count
function updateTotal() {
    totalCount++;
    document.getElementById('totalCount').innerText = 'TotalCount: ' + total;
}

//I get the button element from the id's and add a click event listener to it.
// const totalButton = document.getElementById("totalButton");
const manButton = document.getElementById("manButton");
const womanButton = document.getElementById("womanButton");
const youngadultsButton = document.getElementById("youngadultsButton");
const youngkidsButton = document.getElementById("youngkidsButton");
const infantButton = document.getElementById("infantButton")


manButton.addEventListener('click', function() {
    manCount = countButton(manCount, manCountSpan);
});

womanButton.addEventListener('click', function() {
    womanCount = countButton(womanCount, womanCountSpan);
});

youngadultsButton.addEventListener('click', function() {
    youngadultsCount = countButton(youngadultsCount, youngadultsCountSpan);
});

youngkidsButton.addEventListener('click', function() {
    youngkidsCount = countButton(youngkidsCount, youngkidsCountSpan);
});

infantButton.addEventListener('click', function() {
    infantCount = countButton(infantCount, infantCountSpan);
});



