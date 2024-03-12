var display = document.getElementById("display");
var rollAvgDisplay = document.getElementById("rollAvg");
var averageDisplay = document.getElementById("average");
var lastTime = Date.now();
var roll = [];
var all = [];
var mps;
var rollAvg = 0;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ghostSpeeds = [
    {
        ghost: "Revenant No L.O.S",
        name: "revenant",
        speed: 1
    },
    {
        ghost: "Revenant L.O.S",
        name: "revenant",
        speed: 3
    },
    {
        ghost: "Deogen Roaming",
        name: "deogen",
        speed: 3
    },
    {
        ghost: "Deogen Chasing",
        name: "deogen",
        speed: 0.4
    },
    {
        ghost: "Hantu",
        name: "hantu",
        min: 1.44,
        max: 2.7,
        range: true
    },
    {
        ghost: "Jinn L.O.S, >3m from player, no fuse box",
        name: "jinn",
        speed: 2.5
    },
    {
        ghost: "Jinn normally",
        name: "jinn",
        speed: 1.7
    },
    {
        ghost: "Moroi",
        name: "moroi",
        min: 1.5,
        max: 2.25,
        range: true
    },            
    {
        ghost: "Raiju near active electronic equipment",
        name: "raiju",
        speed: 2.5
    },
    {
        ghost: "Raiju away from active electronic equipment",
        name: "raiju",
        speed: 1.7
    },
    {
        ghost: "Slow Twin",
        name: "theTwins",
        speed: 1.5
    },
    {
        ghost: "Fast Twin",
        name: "theTwins",
        speed: 1.9
    },
    {
        ghost: "Thaye",
        name: "thaye",
        min: 1,
        max: 2.75,
        range: true
    },
    {
        ghost: "Banshee",
        name: "banshee",
        speed: 1.7
    },
    {
        ghost: "Demon",
        name: "demon",
        speed: 1.7
    },
    {
        ghost: "Goryo",
        name: "goryo",
        speed: 1.7
    },
    {
        ghost: "Mare",
        name: "mare",
        speed: 1.7
    },
    {
        ghost: "Myling",
        name: "myling",
        speed: 1.7
    },
    {
        ghost: "Obake",
        name: "obake",
        speed: 1.7
    },
    {
        ghost: "Oni",
        name: "oni",
        speed: 1.7
    },
    {
        ghost: "Onryo",
        name: "onryo",
        speed: 1.7
    },
    {
        ghost: "Phantom",
        name: "phantom",
        speed: 1.7
    },
    {
        ghost: "Poltergeist",
        name: "poltergeist",
        speed: 1.7
    },
    {
        ghost: "Shade",
        name: "shade",
        speed: 1.7
    },
    {
        ghost: "Spirit",
        name: "spirit",
        speed: 1.7
    },
    {
        ghost: "Wraith",
        name: "wraith",
        speed: 1.7
    },
    {
        ghost: "Yokai",
        name: "yokai",
        speed: 1.7
    },
    {
        ghost: "Yurei",
        name: "yurei",
        speed: 1.7
    }
];
var ghosts = document.getElementById("ghosts");

var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");
var pageA = document.getElementById("pageA");
var pageB = document.getElementById("pageB");
var pages = [
    pageA,
    pageB,
    pageC
];
var currentPage = 0;
turnPage(currentPage);

var timerState = false;
var startTime;
var interval;
var firstTime = true;
var pauseTime = 0;
var time;

var listNames;

var canBeText = document.getElementById("canBeText");
var demonTimeText = document.getElementById("demonTimeText");
var otherTimeText = document.getElementById("otherTimeText");
var spiritTimeText = document.getElementById("spiritTimeText");

var footstepSound = document.createElement("audio");
footstepSound.setAttribute("src", "footstep.mp3");
document.body.appendChild(footstepSound);

var footstepSpeed = 1.7;
var footstepInterval;
var footstepToggle = false;
var footstepPause = document.getElementById("footstepPause");

leftArrow.addEventListener('mousedown', function (event) {
    if (currentPage - 1 >= 0) {
        currentPage--;
        turnPage(currentPage);
    }
});

rightArrow.addEventListener('mousedown', function (event) {
    if (currentPage + 1 < pages.length) {
        currentPage++;
        turnPage(currentPage);
    }
});

var allGhosts = [
    "spirit",
    "wraith",
    "phantom",
    "poltergeist",
    "banshee",
    "jinn",
    "mare",
    "revenant",
    "shade",
    "demon",
    "yurei",
    "oni",
    "yokai",
    "hantu",
    "goryo",
    "myling",
    "onryo",
    "theTwins",
    "raiju",
    "obake",
    "theMimic",
    "moroi",
    "deogen",
    "thaye"
];

var emfGhosts = [
    "goryo",
    "jinn",
    "myling",
    "obake",
    "oni",
    "raiju",
    "shade",
    "spirit",
    "theTwins",
    "wraith"
];

var uvGhosts = [
    "banshee",
    "demon",
    "goryo",
    "hantu",
    "jinn",
    "myling",
    "obake",
    "phantom",
    "poltergeist",
    "theMimic"
];

var dotsGhosts = [
    "banshee",
    "deogen",
    "goryo",
    "oni",
    "phantom",
    "raiju",
    "thaye",
    "wraith",
    "yokai",
    "yurei"
];

var orbGhosts = [
    "banshee",
    "hantu",
    "mare",
    "obake",
    "onryo",
    "raiju",
    "revenant",
    "thaye",
    "yokai",
    "yurei",
    "theMimic"
];

var writeGhosts = [
    "demon",
    "deogen",
    "mare",
    "moroi",
    "myling",
    "poltergeist",
    "revenant",
    "shade",
    "spirit",
    "thaye"
];

var sboxGhosts = [
    "deogen",
    "mare",
    "moroi",
    "onryo",
    "phantom",
    "poltergeist",
    "spirit",
    "theMimic",
    "theTwins",
    "wraith",
    "yokai"
];

var freezeGhosts = [
    "demon",
    "hantu",
    "jinn",
    "moroi",
    "oni",
    "onryo",
    "revenant",
    "shade",
    "theMimic",
    "theTwins",
    "yurei"
];

var losGhosts = [
    "spirit",
    "wraith",
    "phantom",
    "poltergeist",
    "banshee",
    "jinn",
    "mare",
    "shade",
    "demon",
    "yurei",
    "oni",
    "yokai",
    "goryo",
    "myling",
    "onryo",
    "theTwins",
    "obake",
    "theMimic",
    "moroi"
];

var evidences = [
    {evidence: "emfEvidence", state: 0, list: emfGhosts},
    {evidence: "dotsEvidence", state: 0, list: dotsGhosts},
    {evidence: "uvEvidence", state: 0, list: uvGhosts},
    {evidence: "orbEvidence", state: 0, list: orbGhosts},
    {evidence: "writeEvidence", state: 0, list: writeGhosts},
    {evidence: "sboxEvidence", state: 0, list: sboxGhosts},
    {evidence: "freezeEvidence", state: 0, list: freezeGhosts},
    {evidence: "losEvidence", state: 0, list: losGhosts}
];

footstepPause.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        event.preventDefault();
    }
});

document.getElementById("timerButton").addEventListener("keydown", (event) => {
    if (event.key === " ") {
        event.preventDefault();
    }
});

document.getElementById("resetButton").addEventListener("keydown", (event) => {
    if (event.key === " ") {
        event.preventDefault();
    }
});

document.getElementById("evidenceTab").addEventListener('mousedown', (event) => {
    currentPage = 0;
    turnPage(currentPage);
});

document.getElementById("footstepTab").addEventListener('mousedown', (event) => {
    currentPage = 1;
    turnPage(currentPage);
});

document.getElementById("smudgeTab").addEventListener('mousedown', (event) => {
    currentPage = 2;
    turnPage(currentPage);
});

document.addEventListener("keydown", function (event) {
    // When click space
    if (event.keyCode == 32 && currentPage == 1) {
        // Instance mps & Rolling Average mps (last 5)
        if (speedMultiplier == 1) {
            rollAvgDisplay.innerText = instance() + " | " + "Average: " + rollingAverage(mps) + "m/s";
        } else {
            instance();
            var realSpeed = mps * speedMultiplier;
            realSpeed = Math.round(realSpeed * 100) / 100;
            rollAvgDisplay.innerText = "Actual Speed: " + realSpeed + "m/s" + " | " + "Adjusted Speed: " + rollingAverage(mps) + "m/s";
        }
        // Average mps (total avg.)
        average(mps);

        drawGraph();
        checkGhosts();
    } else if (event.keyCode == 37) {
        if (currentPage - 1 >= 0) {
            currentPage--;
            turnPage(currentPage);
        }
    } else if (event.keyCode == 39) {
        if (currentPage + 1 < pages.length) {
            currentPage++;
            turnPage(currentPage);
        }
    } else if (event.keyCode == 32 && currentPage == 2) {
        toggleTimer();
    }
});

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});

var speedMultiplier = 1;
function changeSpeedMultiplier() {
    speedMultiplier = parseFloat(document.getElementById("speedMultiplierInput").value);
}

function switchToEvidence() {
    // DO THIS :D ITS FROM THE THIS --->            <p class="heading"><p class="clickText" onclick="switchToEvidence();">Evidence</p> <div class="smallGap"></div> <p class="clickText" onclick="switchToCrossouts();">Crossouts</p></p>
}

function switchToCrossouts() {

}

function toggleFootsteps() {
    if (footstepToggle) {
        clearInterval(footstepInterval);
        footstepPause.style.backgroundImage = "url('play.png')";
    } else {
        var ms = 882.352941176 / footstepSpeed / speedMultiplier;
        footstepInterval = setInterval(playSingleFootstep, ms);
        footstepPause.style.backgroundImage = "url('pause.png')";
    }
    footstepToggle = !footstepToggle;
}

function playSingleFootstep() {
    footstepSound.currentTime = 0;
    footstepSound.play();
}

function changeFootstepSpeed() {
    footstepSpeed = document.getElementById('footstepSlider').value;
    document.getElementById('sliderValue').value = footstepSpeed + "m/s";
    clearInterval(footstepInterval);
    footstepPause.style.backgroundImage = "url('play.png')";
    footstepToggle = false;
}

function crossoutSpeed() {            
    var list = allGhosts.filter(element => !listNames.includes(element));
    for (var i=0; i<list.length; i++) {
        if (list[i] != "theMimic") {
            document.getElementById(list[i] + "Ghost").style.backgroundImage = "url('ghost-line.png')";
        }
    }
}

function loopTimer() {
    time = Date.now() - startTime;
    time += pauseTime;
    if (time / 1000 > 60) {
        canBeText.style.visibility = "visible";
        demonTimeText.style.visibility = "visible";
    }
    if (time / 1000 > 90) {
        otherTimeText.style.visibility = "visible";
    }
    if (time / 1000 > 180) {
        spiritTimeText.style.visibility = "visible";
    }
    var minutes = Math.floor(time / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);
    var milliseconds = Math.floor((time % 1000) / 10);
    if (milliseconds.toString().length == 1) {
        milliseconds += "0";
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById("timerText").innerText = minutes + ":" + seconds + ":" + milliseconds;
}

function toggleTimer() {
    var timerButton = document.getElementById("timerButton");
    if (timerState) {
        timerButton.innerText = "Start";
        pauseTime = time;
        clearInterval(interval);
    } else {
        timerButton.innerText = "Stop";
        interval = setInterval(loopTimer, 100);
        startTime = Date.now();
    }
    timerState = !timerState;
}

function resetTimer() {
    clearInterval(interval);
    document.getElementById("timerText").innerText = "0:00:00";
    startTime = Date.now();
    timerState = false;
    timerButton.innerText = "Start";
    pauseTime = 0;
    
    canBeText.style.visibility = "hidden";
    demonTimeText.style.visibility = "hidden";
    otherTimeText.style.visibility = "hidden";
    spiritTimeText.style.visibility = "hidden";
}

function blurb(ghost) {
    for (var i=0; i<blurbs.length; i++) {
        if (blurbs[i].ghost != ghost) {
            continue;
        }
        var blurbText = "<p class='headingB'>Evidence:</p>" + blurbs[i].evidence[0] + "<br>" + blurbs[i].evidence[1] + "<br>" + blurbs[i].evidence[2] + "<br><br>" + blurbs[i].text;
        document.getElementById("info").innerHTML = blurbText;
        document.getElementById("ghostPageHeading").innerText = ghost;
    }
}

function resetEvidence() {
    var ghostList = document.getElementsByClassName("ghost");
    for (var i=0; i<ghostList.length; i++) {
        ghostList[i].style.backgroundImage = "";
        ghostList[i].style.opacity = 1;
    }
    
    for (var i=0; i<evidences.length; i++) {
        evidences[i].state = 0;
    }

    var list = document.getElementsByClassName("flexEvidence");
    for (var i=0; i<list.length; i++) {
        list[i].getElementsByClassName("checkbox")[0].setAttribute("src", "box.png");
        list[i].getElementsByClassName("crossout")[0].setAttribute("src", "");
    }
}

function toggleGhost(ghost) {
    if (document.getElementById(ghost).style.backgroundImage) {
        document.getElementById(ghost).style.backgroundImage = "";
    } else {
        document.getElementById(ghost).style.backgroundImage = "url('ghost-line.png')";
    }
}

function checkEvidence(evidence) {
    for (var i=0; i<evidences.length; i++) {
        if (evidences[i].evidence != evidence) {
            continue;
        }
        if (evidences[i].state == 0) {
            evidences[i].state = 1;
            document.getElementById(evidence).getElementsByClassName("checkbox")[0].setAttribute("src", "box-checked.png");
        } else if (evidences[i].state == 1) {
            evidences[i].state = 2;
            document.getElementById(evidence).getElementsByClassName("checkbox")[0].setAttribute("src", "box.png");
            document.getElementById(evidence).getElementsByClassName("crossout")[0].setAttribute("src", "line.png");
        } else {
            document.getElementById(evidence).getElementsByClassName("crossout")[0].setAttribute("src", "");
            evidences[i].state = 0;
        }
        hideGhosts();
    }
}

function hideGhosts() {
    var ghostsList = document.getElementsByClassName("ghost");
    for (var i=0; i<ghostsList.length; i++) {
        ghostsList[i].style.opacity = 1;
    }
    for (var i=0; i<evidences.length; i++) {
        if (evidences[i].state == 0) {
            continue;
        } else if (evidences[i].state == 1) {
            var list = allGhosts.filter(element => !evidences[i].list.includes(element));
            for (var j=0; j<list.length; j++) {
                document.getElementById(list[j] + "Ghost").style.opacity = 0.3;
            }
        } else if (evidences[i].state == 2) {
            var list = evidences[i].list;
            for (var j=0; j<list.length; j++) {
                document.getElementById(list[j] + "Ghost").style.opacity = 0.3;
            }
        }
    }
}

function turnPage(page) {
    for (var i=0; i<pages.length; i++) {
        if (i == page) {
            pages[i].style.visibility = "visible";
        } else {
            pages[i].style.visibility = "hidden";
        }
    }
}

function checkGhosts() {
    var list = "";
    listNames = [];
    var marginErr = 0.2;
    for (var i=0; i<ghostSpeeds.length; i++) {
        if (!ghostSpeeds[i].range) {
            if (Math.abs(ghostSpeeds[i].speed - rollAvg) <= marginErr) {
                list += `${ghostSpeeds[i].ghost}: ${ghostSpeeds[i].speed}m/s \n`;
                listNames.push(ghostSpeeds[i].name);
            }
        } else {
            if (rollAvg > ghostSpeeds[i].min - marginErr && rollAvg < ghostSpeeds[i].max + marginErr) {
                list += `${ghostSpeeds[i].ghost}: ${ghostSpeeds[i].min}m/s - ${ghostSpeeds[i].max}m/s \n`;
                listNames.push(ghostSpeeds[i].name);
            }
        }
    }
    ghosts.innerText = list;

}

function drawGraph() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    var points = [];
    for (var i=0; i<all.length; i++) {
        var x = i * ctx.canvas.width / all.length;
        var y = all[i] * ctx.canvas.height / 5;
        y = ctx.canvas.height - y;
        points.push({x, y});
    }
    ctx.strokeStyle = "red";
    ctx.moveTo(points[0].x, points[0].y);
    ctx.beginPath();
    for (var i=1; i<points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "lime";
    var y = ctx.canvas.height - (rollAvg * ctx.canvas.height / 5);
    ctx.moveTo(0, y);
    ctx.lineTo(ctx.canvas.width, y);
    ctx.stroke();
}

function instance() {
    var diff = Date.now() - lastTime;
    mps = 882.352941176 / diff;
    mps *= 100;
    mps /= speedMultiplier;
    mps = Math.round(mps) / 100;
    lastTime = Date.now();
    return "Instance: " + mps + "m/s";
}

function rollingAverage(mps) {
    roll.push(mps);
    if (roll.length > 5) {
        roll.splice(0, 1);
    }
    var avg = 0;
    for (var i=0; i<roll.length; i++) {
        avg += roll[i];
    }
    avg /= roll.length;
    avg *= 100;
    avg = Math.round(avg) / 100;
    rollAvg = avg;
    return avg;
}

function average(mps) {
    all.push(mps);
    var avg = 0;
    for (var i=0; i<all.length; i++) {
        avg += all[i];
    }
    avg /= all.length;
    avg *= 100;
    avg = Math.round(avg) / 100;
    return "Average: " + avg + "m/s";
}
