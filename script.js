var timeEl = document.querySelector("h1");
var topDiv = document.querySelector(".time");
var mainEl = document.getElementById("main");
var frameTag = document.createElement("iframe");
frameTag.style.display = "none";
var secondsLeft = 10;

function setTime() {
  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    // timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
    timeEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  topDiv.style.display = "none";
  frameTag.style.display = "block";
  // timeEl.textContent = " ";
  // var imgEl = document.createElement("img");
  // imgEl.setAttribute("src", "images/image_1.jpg");
  // mainEl.appendChild(imgEl);

  
  frameTag.setAttribute("src", "https://giphy.com/embed/peAFQfg7Ol6IE");
  frameTag.setAttribute("class", "giphy-embed");
  frameTag.setAttribute('allowFullScreen', '')
  mainEl.appendChild(frameTag);

  // <iframe src="https://giphy.com/embed/peAFQfg7Ol6IE" width="480" height="455" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  // <p><a href="https://giphy.com/gifs/peAFQfg7Ol6IE">via GIPHY</a></p>

}

setTime();