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
    // Extract the input text
    const inputText = document.getElementById('taskInput').value

    toggleButtons();
});

document.getElementById('stopButton').addEventListener('click', function(){
    
    
    // toggle the stop button
    toggleButtons();
});