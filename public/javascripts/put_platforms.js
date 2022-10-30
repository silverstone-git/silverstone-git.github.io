platformList = [
    "C++",
    "Python",
    "Java",
    "Web",
    "Django",
    "Android",
    "MATLAB",
    "Bash",
    "Firebase",
    "SQL",
    "Git",
]


var platformSVGList = [
    "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg",
    "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    "https://static.djangoproject.com/img/logos/django-logo-positive.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Bash_Logo_black_and_white_icon_only.svg",
    "https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-logomark.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
    "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg",
]


var platformUl = $("div.platforms")

for(var i = 0; i < platformList.length; i ++) {
    platformUl.append('<div class="platform" id="platform' + i + '">' + '<img src="' + platformSVGList[i] + '">'  + platformList[i] + '</div>');
}