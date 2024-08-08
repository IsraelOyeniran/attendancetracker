//This is where I get the element from the id's
const totalCountSpan = document.getElementById("totalCount");
const menCountSpan = document.getElementById("menCount");
const womenCountSpan = document.getElementById("womenCount");
const youngadultsCountSpan = document.getElementById("youngadultsCount");
const youngkidsCountSpan = document.getElementById("youngkidsCount");
const infantCountSpan = document.getElementById("infantCount");

let totalCount = 0;
let menCount = 0;
let womenCount = 0;
let youngadultsCount = 0;
let youngkidsCount = 0;
let infantCount = 0;

function countButton(count, span) {
    updateTotal();
    count = count+1;
    span.textContent = count;
    return count;
}

function redButtons(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = 'red';
    }    
}

// Function to update the total count
function updateTotal() {
    totalCount++;
    document.getElementById('totalCount').innerText = 'TotalCount: ' + totalCount;
}

//I get the button element from the id's and add a click event listener to it.
// const totalButton = document.getElementById("totalButton");
const menButton = document.getElementById("menButton");
const womenButton = document.getElementById("womenButton");
const youngadultsButton = document.getElementById("youngadultsButton");
const youngkidsButton = document.getElementById("youngkidsButton");
const infantButton = document.getElementById("infantButton")
let buttons = [menButton,womenButton,youngadultsButton,youngkidsButton,infantButton];


menButton.addEventListener('click', function() {
    menCount = countButton(menCount, menCountSpan);
});

womenButton.addEventListener('click', function() {
    womenCount = countButton(womenCount, womenCountSpan);
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



