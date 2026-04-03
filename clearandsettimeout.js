
// 1. Set a long timer (10 seconds)
let timerID = setTimeout(() => {
    console.log("You'll never see this.");
}, 1000);

// 2. Set a second timer to cancel the first one after 3 seconds
setTimeout(() => {
    clearTimeout(timerID);
    console.log("Timer 1 was cancelled after 3 seconds.");
}, 3000);