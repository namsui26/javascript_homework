const counterElement = document.getElementById("counter");
let count = parseInt(counterElement.innerText);

const intervalId = setInterval(() => {
  count++;
  counterElement.innerText = count;

  if (count === 5) {
    console.log("종료");
    clearInterval(intervalId);
  }
}, 1000);
