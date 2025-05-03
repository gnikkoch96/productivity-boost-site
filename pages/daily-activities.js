function toggleButtons(){
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    if (startButton.style.display === 'none') {
        startButton.style.display = 'inline-block';
        stopButton.style.display = 'none';
    }else{
        startButton.style.display = 'none';
        stopButton.style.display = 'inline-block';
    }
}

document.getElementById('startButton').addEventListener('click', function(){
    // Extract the time
    const currentTime = new Date().toLocaleTimeString();
       
    // Extract the input text
    const inputText = document.getElementById('taskInput').value

    if(inputText === ""){
        alert("Please enter a task before starting...");
        return;
    }

    // add a paragraph tag to the activity display
    const activityDisplay = document.getElementById('activityDisplay');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `[${currentTime}] Start ${inputText}`;
    activityDisplay.appendChild(newParagraph); 

    toggleButtons();
});

document.getElementById('stopButton').addEventListener('click', function(){
    
    
    // toggle the stop button
    toggleButtons();
});