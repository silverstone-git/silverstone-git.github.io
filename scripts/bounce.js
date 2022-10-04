console.log("Hemlo Domst");

function animate($element, animationType) {
    $element.addClass(`animate__animated animate__${animationType}`).css("display", "flex");
}

projectsDiv = $("#projects-div")

var bounceWP = $("#waypointer").waypoint(function() {
    console.log("waypoints triggered for worksection!");
    animate(projectsDiv, "bounceInLeft");
}, {offset: "50%"})

var introfadeWP = $("#intro-section").waypoint(function() {
    console.log("waypoints triggered for introsection fadein")
    animate($("#greet-container"), "fadeIn")
})