// global variables
let currentTask = "";

// listeners
document.getElementById("startButton").addEventListener("click", function () {
  // Extract the time
  const currentTime = new Date().toLocaleTimeString();

  // Extract the input text
  const inputText = document.getElementById("taskInput");

  if (inputText === "") {
    alert("Please enter a task before starting...");
    return;
  }

  // update current task
  currentTask = inputText.value;

  // add a paragraph tag to the activity display
  addActivityToDisplay(`[${currentTime}] Start ${inputText.value}`);

  // reset the input text
  inputText.value = "";

  toggleButtons();
});

document.getElementById("stopButton").addEventListener("click", function () {
  // Extract the time
  const currentTime = new Date().toLocaleTimeString();

  // add a paragraph tag to the activity display
  addActivityToDisplay(`[${currentTime}] Stop ${currentTask}`);

  // reset the current task
  currentTask = "";

  // toggle the stop button
  toggleButtons();
});

// functions
function toggleButtons() {
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const taskInput = document.getElementById("taskInput");

  if (startButton.style.display === "none") {
    taskInput.style.display = "inline-block";
    startButton.style.display = "inline-block";
    stopButton.style.display = "none";
  } else {
    taskInput.style.display = "none";
    startButton.style.display = "none";
    stopButton.style.display = "inline-block";
  }
}

// create a paragraph tag to the activity display with the new activity
function addActivityToDisplay(activityText) {
  const activityDisplay = document.getElementById("activityDisplay");
  const newParagraph = document.createElement("p");
  newParagraph.textContent = activityText;
  activityDisplay.appendChild(newParagraph);
}
