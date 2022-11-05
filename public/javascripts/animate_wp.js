function animate($element, animationType) {
    $element.addClass(`animate__animated animate__${animationType}`).css("display", "flex");
}

function removeAnimate($element, animationType) {
    $element.removeClass(`animate__animated animate__${animationType}`).css("display", "none");
}


//var slideCounter = 0;

$(".platform").hover(function() {
    animate($("#" + this.id), "heartBeat");
}, function () {
    $("#" + this.id).removeClass("animate__animated animate__heartBeat")
})

$("#next-proj").click(function() {
    var linkWidth = $("#projects-div").width();
    var curpos = $("#projects-div").scrollLeft();
    curpos += linkWidth;
    $("#projects-div").scrollLeft(curpos)
    if($("#prev-proj").css("display") == "none") {
        $("#prev-proj").css("display", "block");
    }

    console.log(linkWidth)
    if(curpos > linkWidth*2 + 100) {
        $("#next-proj").css("display", "none");
    }
    console.log(curpos);
})

$("#prev-proj").click(function() {
    var linkWidth = $("#projects-div").width();
    var curpos = $("#projects-div").scrollLeft();
    curpos -= linkWidth;
    $("#projects-div").scrollLeft(curpos);
    if($("#next-proj").css("display") == "none") {
        $("#next-proj").css("display", "block");
    }
    if(curpos < 200) {
        $("#prev-proj").css("display", "none");
    }
    console.log(curpos);
})


var projTopRemoveWP = $("#waypointer").waypoint(function(direction) {
    if(direction == "up") {
        removeAnimate($("#proj-container"), "fadeIn");
    }
}, {offset: "100%"})

var projTopWP = $("#waypointer").waypoint(function(direction) {
    if(direction == "down") {
        animate($("#proj-container"), "fadeIn");
    }
}, {offset: "30%"})

var projBottomWP = $("#waypointer").waypoint(function(direction) {
    if(direction == "up") {
        animate($("#proj-container"), "fadeIn");
    } 
}, {offset: "-40%"})

var projBottomRemoveWP = $("#waypointer").waypoint(function(direction) {
    if(direction == "down") {
        removeAnimate($("#proj-container"), "fadeIn");
    }
}, {offset: "-100%"})









// dont need a top remove here because that would cross the document topmost point
var introTopWP = $("#intro-section").waypoint(function() {
    animate($("#greet-container"), "fadeIn");
}, {offset: "30%"})

var introBottomWP = $("#intro-section").waypoint(function(direction) {
    if(direction == "up") {
        animate($("#greet-container"), "fadeIn");
    } 
}, {offset: "-40%"})

var introBottomRemoveWP = $("#intro-section").waypoint(function(direction) {
    if(direction == "down") {
        removeAnimate($("#greet-container"), "fadeIn");
    }
}, {offset: "-100%"})






var platformsTopRemoveWP = $("#waypointer2").waypoint(function(direction) {
    if(direction == "up") {
        removeAnimate($("#platforms"), "fadeIn");
    }
}, {offset: "100%"})

var platformsTopWP = $("#waypointer2").waypoint(function(direction) {
    if(direction == "down") {
        animate($("#platforms"), "fadeIn");
    }
}, {offset: "30%"})

var platformsBottomWP = $("#waypointer2").waypoint(function(direction) {
    if(direction == "up") {
        animate($("#platforms"), "fadeIn");
    } 
}, {offset: "-40%"})

var platformsBottomRemoveWP = $("#waypointer2").waypoint(function(direction) {
    if(direction == "down") {
        removeAnimate($("#platforms"), "fadeIn");
    }
}, {offset: "-100%"})
