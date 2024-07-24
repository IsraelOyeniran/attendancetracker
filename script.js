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

// allButton.addEventListener('click', function() {
//     allCounts = countButton(allCounts, allCountSpan);
// });

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




// Select all number buttons and the total button
const numberButtons = document.querySelectorAll('.number-button');
const totalButton = document.querySelector('.total-button');
const totalCountDisplay = document.getElementById('total-count');

// Initialize total count
let totalCount = 0;

// Add click event listeners to number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the number from the button text and convert to integer
        const number = parseInt(button.textContent);
        
        // Add the number to the total count
        totalCount += number;
        
        // Update the total count display
        totalCountDisplay.textContent = `Total: ${totalCount}`;
    });
});

// Add click event listener to total button (optional)
totalButton.addEventListener('click', () => {
    // You can perform additional actions here if needed
    alert(`The total count is ${totalCount}`);
});



