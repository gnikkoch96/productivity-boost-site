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

document
  .getElementById("exportButton")
  .addEventListener("click", async function () {
    // Extract the activity text area content
    const activityTextArea =
      document.getElementById("activityTextArea");

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
  const activityTextArea = document.getElementById("activityTextArea");
  activityTextArea.textContent += activityText + "\n";
}
