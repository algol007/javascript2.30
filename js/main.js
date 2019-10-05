const secondHandle = document.querySelector('.second-handle');
const minuteHandle = document.querySelector('.min-handle');
const hourHandle = document.querySelector('.hour-handle');

function setDate(){
    // console.log("Hi");
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHandle.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHandle.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    minuteHandle.style.transform = `rotate(${minutesDegrees}deg)`;

    // console.log(seconds);
}

setInterval(setDate, 1000);