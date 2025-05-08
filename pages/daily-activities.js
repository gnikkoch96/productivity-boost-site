// global variables
let currentTask = "";

// listeners
document.addEventListener("keydown", function (event) {
  // Check if the pressed key is "Enter"
  if (event.key === "Enter") {
    // Trigger the click event on the "Start" button
    document.getElementById("startButton").click();
  }
});

document.getElementById("start-button").addEventListener("click", function () {
  // Extract the time
  const currentTime = new Date().toLocaleTimeString();

  // Extract the input text
  const inputText = document.getElementById("task-input");

  if (inputText === "") {
    alert("Please enter a task before starting...");
    return;
  }

  document.getElement

  // update current task
  currentTask = inputText.value;

  // add a paragraph tag to the activity display
  addActivityToDisplay(`[${currentTime}] Start ${inputText.value}`);

  // reset the input text
  inputText.value = "";

  toggleButtons();
});

document.getElementById("stop-button").addEventListener("click", function () {
  // Extract the time
  const currentTime = new Date().toLocaleTimeString();

  // add a paragraph tag to the activity display
  addActivityToDisplay(`[${currentTime}] Stop ${currentTask}`);

  // reset the current task
  currentTask = "";

  // toggle the stop button
  toggleButtons();
});

document
  .getElementById("export-button")
  .addEventListener("click", async function () {
    // Extract the activity text area content
    const activityTextArea = document.getElementById("activity-text-area");

    // Create a .txt file with the current date as the name
    const currentDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
    const fileName = `${currentDate}.txt`;
    const fileContent = activityTextArea.textContent;
    try {
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: fileName,
        types: [
          {
            description: "Text Files",
            accept: { "text/plain": [".txt"] },
          },
        ],
      });

      const writableStream = await fileHandle.createWritable();
      await writableStream.write(fileContent);
      await writableStream.close();
      console.log("File saved successfully!");
    } catch (err) {
      console.error("File save canceled or failed:", err);
    }
  });

// functions
function toggleButtons() {
  const startButton = document.getElementById("start-button");
  const stopButton = document.getElementById("stop-button");
  const taskInput = document.getElementById("task-input");

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
  const activityTextArea = document.getElementById("activity-text-area");
  activityTextArea.textContent += activityText + "\n";
}
