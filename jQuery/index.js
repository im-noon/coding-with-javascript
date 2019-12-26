

$("h1").css({
    color:"red",
});

$("h1").click(function(event) {
    /* Act on the event */
    console.log(event)
});

$("button").click(function(event) {
    /* Act on the event */
    $("h1").css({
        color:"green",
    });
});
