var character = document.querySelector("#character");
var block = document.querySelector("#block");
var score = 0

document.addEventListener("click", function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(() => {
    character.classList.remove("animate");
  }, 500);
});

var checkDead = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top"),
    10
  );
  var characterLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left"),
    10
  );

  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left"),
    10
  );

  if (blockLeft < 69 && blockLeft > 31 && characterTop >= 150) {
    block.style.display = "none";
    alert("GAME OVER");
  }

  document.querySelector("#score").innerHTML = score
  if (blockLeft < 1){
      score++
      console.log("Hüppasi üle", score)
      document.querySelector("#score").innerHTML = score
  }
});


function start() {
  block.classList.add("startgame");
  block.style.display = "block"
  score = 0
}
