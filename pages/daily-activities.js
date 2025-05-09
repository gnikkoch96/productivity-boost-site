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

  // update current task
  currentTask = inputText.value;

  // add a paragraph tag to the activity display
  addActivityToDisplay(`[${currentTime}] Start ${inputText.value}`);

  // reset the input text
  inputText.value = "";

  toggleFocused();
});

document.getElementById("stop-button").addEventListener("click", function () {
  // Extract the time
  const currentTime = new Date().toLocaleTimeString();

  // add a paragraph tag to the activity display
  addActivityToDisplay(`[${currentTime}] Stop ${currentTask}`);

  // reset the current task
  currentTask = "";

  toggleFocused();
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

// this toggles between starting and stopping an activity
function toggleFocused() {
  const activityEntrySection = document.getElementById('activity-entry');
  const activityLogSection = document.getElementById('activity-log');
  const exportLogSection = document.getElementById('export-log'); 
  const focusedSection = document.getElementById('focused');
  
  if(focusedSection.style.display === "") {
    focusedSection.style.display = "flex";
    activityEntrySection.style.display = "none";
    activityLogSection.style.display = "none";
    exportLogSection.style.display = "none"; 
  }else{
    focusedSection.style.display = "";
    activityEntrySection.style.display = "block";
    activityLogSection.style.display = "block";
    exportLogSection.style.display = "block"; 
  }
}

// create a paragraph tag to the activity display with the new activity
function addActivityToDisplay(activityText) {
  const activityTextArea = document.getElementById("activity-text-area");
  activityTextArea.textContent += activityText + "\n";
}
