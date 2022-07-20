var password = prompt("Nhập 'chị Linh xinh gái' để được chơi game ^^");
if (password === "chi Linh xinh gai" || password === "chi linh xinh gai" || password === "chị Linh xinh gái") {
  var buttonColors = ["green", "red", "yellow", "blue"];
  var userClickedPattern = [];
  var gamePattern = [];
  var started = false;
  var level = 0;
  $(document).keypress(function () {
    if (!started) {
      $("h1").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
  $(".btn").click(function () {
    userClickedPattern.push($(this).attr("id"));
    buttonGotClicked($(this))
    playSound($(this).attr("id"));
    checking(userClickedPattern.length - 1)
  });

  function checking (currentLevel) {
      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
          setTimeout(function(){nextSequence()}, 1000)
        }
      } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over. Press A Key to Restart");
        setTimeout(function() {
          $("body").removeClass("game-over")
        }, 200);
        startOver();
      }
    }

  function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level)
    var randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  };

  function playSound (name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  };

  function buttonGotClicked(currentButton) {
    currentButton.addClass("click");
    setTimeout(function(){
      currentButton.removeClass("click")
    }, 100)
  }

  function startOver () {
    gamePattern = [];
    level = 0;
    started = false;
  }
} else {
  $("h1").text("Can't start game now @@ Try again! ");
  alert("Sai rùi em zai ơiiiiii... Reload lại page rồi nhập đúng đi nhe hihi");
}
