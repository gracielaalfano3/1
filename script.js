// script.js

// Interactive features

function displayCurrentDateTime() {
    const currentDateTime = new Date();
    return currentDateTime.toUTCString();
}

console.log('Current Date and Time (UTC):', displayCurrentDateTime());
