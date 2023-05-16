function animate($element, animationType) {
    $element.addClass(`animate__animated animate__${animationType}`).css("display", "flex");
}

$(".platform").hover(function() {
    animate($("#" + this.id), "heartBeat");
}, function () {
    $("#" + this.id).removeClass("animate__animated animate__heartBeat")
})


var bounceWP = $("#waypointer").waypoint(function() {
    console.log("waypoints triggered for worksection!");
    animate($("#projects-div"), "bounceInLeft");
}, {offset: "50%"})

var introfadeWP = $("#intro-section").waypoint(function() {
    console.log("waypoints triggered for introsection fadein");
    animate($("#greet-container"), "fadeIn");
})

var bounceRtWP = $("#platforms").waypoint(function() {
    console.log("waypoints trigerred for platforms div");
    animate($("#platforms"), "bounceInRight");
}, {offset: "60%"})
