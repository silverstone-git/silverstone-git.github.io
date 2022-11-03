function animate($element, animationType) {
    $element.addClass(`animate__animated animate__${animationType}`).css("display", "flex");
}

$(".platform").hover(function() {
    animate($("#" + this.id), "heartBeat");
}, function () {
    $("#" + this.id).removeClass("animate__animated animate__heartBeat")
})


var bounceWP = $("#waypointer").waypoint(function() {
    animate($("#projects-div"), "fadeIn");
}, {offset: "50%"})


var introfadeWP = $("#intro-section").waypoint(function() {
    animate($("#greet-container"), "fadeIn");
})


var bounceRtWP = $("#platforms").waypoint(function() {
    animate($("#platforms"), "fadeIn");
}, {offset: "60%"})
