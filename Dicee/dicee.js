var imgArr = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png", "dice6.png"];
function randomNumber1() {

    document.getElementsByTagName("h1")[0].innerHTML = "Refresh Me";

    var index1 = Math.floor(Math.random() * 6);
    var index2 = Math.floor(Math.random() * 6);


    var img1 = "images/" + imgArr[index1];
    var img2 = "images/" + imgArr[index2];


    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];

    if (index1 > index2) {
        document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player 1 Wins!";
    }
    else if (index1 < index2) {
        document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins! 🚩";
    }
    else {
        document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
    }


    image1.setAttribute('src', img1);
    image2.setAttribute('src', img2);

    setTimeout(randomNumber1, 1000); // Change image every 1 seconds

}



randomNumber1();
