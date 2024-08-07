const totalCountSpan = document.getElementById("totalCount");
const serviceSelect = document.getElementById("serviceSelect");
const exportButton = document.getElementById("exportButton");
const resetButton = document.getElementById("resetButton");

const manCountSpan = document.getElementById("manCount");
const womanCountSpan = document.getElementById("womanCount");
const youngadultsCountSpan = document.getElementById("youngadultsCount");
const youngkidsCountSpan = document.getElementById("youngkidsCount");
const infantCountSpan = document.getElementById("infantCount");

function updateTotalCount() {
  const countSpans = document.querySelectorAll(".container > span");
  let totalCount = 0;

  countSpans.forEach((span) => {
    totalCount += parseInt(span.textContent, 10);
  });

  totalCountSpan.textContent = totalCount;

  updateExportButtonState();
}

function updateCount(button, isIncrement) {
  const container = button.closest(".container");
  const countSpan = container.querySelector("span");
  let count = parseInt(countSpan.textContent, 10);

  if (isIncrement) {
    count++;
  } else if (count > 0) {
    count--;
  }

  countSpan.textContent = count;

  updateTotalCount();
}

// Function to update the export button state
function updateExportButtonState() {
  const totalCount = parseInt(totalCountSpan.textContent, 10);
  exportButton.disabled = totalCount <= 0;
}

// Reset function to set all counts to 0 and reset selections
function resetAll() {
  manCountSpan.textContent = 0;
  womanCountSpan.textContent = 0;
  youngadultsCountSpan.textContent = 0;
  youngkidsCountSpan.textContent = 0;
  infantCountSpan.textContent = 0;
  totalCountSpan.textContent = 0;

  serviceSelect.selectedIndex = 0;

  updateExportButtonState();
}

resetButton.addEventListener("click", () => {
  if (parseInt(totalCountSpan.textContent, 10) <= 0) return;

  confirm("Are you sure you want to reset all counts/values?") && resetAll();
});

// Update the button state if the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  updateExportButtonState();
});

// Add event listeners to all increment and decrement buttons
const incrementButtons = document.querySelectorAll(
  '.actionButton[title="Increment"]'
);

const decrementButtons = document.querySelectorAll(
  '.actionButton[title="decrement"]'
);

incrementButtons.forEach((button) => {
  button.addEventListener("click", () => updateCount(button, true));
});

decrementButtons.forEach((button) => {
  button.addEventListener("click", () => updateCount(button, false));
});

// Function to generate PDF
exportButton.addEventListener("click", () => {
  const jsPDF = window.jspdf.jsPDF;
  const doc = new jsPDF();

  // Add the selected service option as a sub header
  const selectedService =
    serviceSelect.options[serviceSelect.selectedIndex].text;
  doc.setFontSize(16);
  doc.setFont(undefined, "bold");
  doc.text(selectedService, 20, 20);

  // Add timestamp to easily know when it was generated
  // This is also used to make the filename unique and identifiable
  const timestamp = new Date().toLocaleString();
  doc.setFontSize(12);
  doc.setFont(undefined, "normal");
  doc.text(timestamp, 20, 30);

  // Add table of counts
  const counts = [
    { section: "Men", count: manCountSpan.textContent },
    {
      section: "Women",
      count: womanCountSpan.textContent,
    },
    {
      section: "Age 13-18",
      count: youngadultsCountSpan.textContent,
    },
    {
      section: "Age 6-12",
      count: youngkidsCountSpan.textContent,
    },
    {
      section: "Age 0-5",
      count: infantCountSpan.textContent,
    },
    { section: "Total Count", count: totalCountSpan.textContent },
  ];

  let yPos = 40;
  counts.forEach((item) => {
    doc.text(`${item.section}: ${item.count}`, 20, yPos);
    yPos += 10;
  });

  // Save Report
  doc.save(`Attendance-report (${timestamp}).pdf`);
});

// Footer section
const footerText = document.querySelector(".footerText");
const currentYear = new Date().getFullYear();
footerText.innerHTML = `${currentYear} &copy; Developed by Israel`;
