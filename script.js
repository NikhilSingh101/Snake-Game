let timer = 60;
let score = 0;
let randomHit = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}

function getNewHit() {
    randomHit = Math.floor(Math.random() * 10);
    document.querySelector("#hitValue").textContent = randomHit;
}

function makeBubble() {
  let clutter = "";
  const randomNumber = () => {
    return Math.floor(Math.random() * 10);
  };
  for (let i = 1; i <= 168; i++) {
    clutter += `<div class="bubble">${randomNumber()}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    let timerInt = setInterval(function() {
        if(timer > 0){
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over! Your Score is ${score}</h1>`;
        }
    }, 1000);
}

// Event Bubbling
document.querySelector("#pbtm").addEventListener("click", function(dets) { // dets = e
    // console.log(dets);
    // console.log(dets.srcElement.innerHTML);
    // console.log(Number(dets.target.textContent));  // String => Number

    let clickedNum = Number(dets.target.textContent);

    if(clickedNum === randomHit) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

getNewHit();
runTimer();
makeBubble();



