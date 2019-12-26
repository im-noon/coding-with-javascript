

/**
 * set button clicked event
 * @param none
 * @return none
 */
function setClickedEvet() {

    // get button list
    var buttons = document.getElementsByClassName("drum");

    // add event listener to all button
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", buttonClicked);
    }
}


/**
 * Button clicked handler
 * @param none
 * @return none
 */
function buttonClicked() {

    makeSoundForID(this.innerHTML);

    setButtonAnimated(this.innerHTML);
}


/**
 * set key pressed event
 * @param none
 * @return none
 */
function setKeyPressdEvent() {

    document.addEventListener("keypress", function() {
        // decode key
        switch (event.key) {

            case "w":
            case "a":
            case "s":
            case "d":
            case "j":
            case "k":
            case "l": {
                makeSoundForID(event.key);

                setButtonAnimated(event.key);

            }
            break;

            default:
                break;
        }

    });
}


/**
 * play Audio from file
 * @param playID : audio file ID
 * @return none
 */
function makeSoundForID(playID) {

    switch (playID) {

        case "w":
            playSound("sounds/tom-1.mp3");
            break;

        case "a":
            playSound("sounds/tom-2.mp3");
            break;

        case "s":
            playSound("sounds/tom-3.mp3");
            break;

        case "d":
            playSound("sounds/tom-4.mp3");
            break;

        case "j":
            playSound("sounds/snare.mp3");
            break;

        case "k":
            playSound("sounds/kick-bass.mp3");
            break;

        case "l":
            playSound("sounds/crash.mp3");
            break;

        default:
            break;
    }
}

/**
 * play Audio from file
 * @param audioFile : audio file name
 * @return none
 */
 function playSound(audioFile) {
    var audio = new Audio(audioFile);
    audio.play();
}

/**
 * set button animantion
 * @param className : button class name
 * @return none
 */
function setButtonAnimated(className) {

    var button = document.getElementsByClassName(className)[0];
    button.classList.add('pressed');
    setTimeout(function() {
        button.classList.remove('pressed');
    }, 100);
}

setClickedEvet();
setKeyPressdEvent();
