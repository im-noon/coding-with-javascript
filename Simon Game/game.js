
/**
 * game color and patter bucket
 */
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var wrongSound = "wrong";

var gameSound = new makeSound(wrongSound);

var level = 0;

$(".btn").click(function(event) {
    if (level > 0) {
        var userChoosenColor = $(event.target)[0].id;

        userClickedPattern.push(userChoosenColor);
        animatePress(userChoosenColor);
        playSound(userChoosenColor);

console.log("line 24 " + userClickedPattern);

        checkAnswer(userClickedPattern.length-1);
    }
});


$("body").keypress(function(event) {
    if (level == 0) {
        nextSequence();
    }
});


/**
 * start new sequence
 * @param none
 * @return none
 */
function nextSequence() {
    userClickedPattern = [];

    // update level
    level++;
    updateLevel();

    // creaet random number
    var randomNumber = Math.floor((Math.random()*4));
    var randomChoosenColor = buttonColors[randomNumber];

    // choose patter color
    gamePattern.push(randomChoosenColor);

    $("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChoosenColor);

    // increment level

}

/**
 * create Audio
 * @param name : audio file name
 * @return none
 */
 function makeSound(name) {
    var src = "sounds/" + name + ".mp3";
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("muted", "muted");
    this.sound.style.display = "none";

    document.body.appendChild(this.sound);

    this.media = function(media){
        this.sound.src = media;
    }

    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

/**
 * play audio
 * @param name : audio file name
 * @return none
 */
  function playSound(name) {

    var src = "sounds/" + name + ".mp3";
    gameSound.media(src);
    gameSound.play();
  }

  function stopSound() {
    gameSound.stop();
  }

  /**
 * animate click
 * @param name : button color
 * @return none
 */
  function animatePress(name) {
    $("#"+name).addClass('pressed');
    setTimeout(function() {
        $("#"+name).removeClass('pressed');
    }, 100);
  }


/**
 * update game level
 * @param none
 * @return none
 */
  function updateLevel() {
    $('#level-title').text("Level " + level);
  }



function checkAnswer(currentLevel) {

    console.log("line 131 " + currentLevel);
    console.log("line 132 " + gamePattern);
    console.log("line 133 " + userClickedPattern);

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        stopSound();
        playSound(wrongSound);

        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function startOver() {
  level = 0;
  gamePattern = [];
}
