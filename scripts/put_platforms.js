platformList = [
    "C/C++",
    "Python",
    "Java",
    "Web (HTML, CSS, JS)",
    "Django",
    "Android (Kotlin)",
    "Bash",
    "Firebase",
    "SQL",
]

var platformUl = $("ul.platforms")

for(var i = 0; i < platformList.length; i ++) {
    platformUl.append('<li class="platform">' + platformList[i] + '</li>');
}