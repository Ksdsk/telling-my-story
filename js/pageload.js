const message = [
    "",
    "oh, hi there.",
    "unfortunately, daniel is away right now",
    "probably fixing a bug",
    "or he's doing his schoolwork",
    "or maybe he's binge-watching k-dramas.",
    "i can tell you a bit about him though.",
    "click on me."
];

function startup(i) {
    if (i > message.length - 1) {
        return;
    } else if (i !== message.length - 1){
        setTimeout(hidetext, 4000, document.getElementById("clickme"));
    }
    document.getElementById("clickme").innerHTML = message[i];
    i++;

    setTimeout(startup, 5000, i);

}

function hidetext(el) {
    el.innerHTML = "";
}

function slide_all_rect() {
    document.getElementById("clickme").innerHTML = "awesome!";
    setTimeout(moveRect, 1000);
    document.getElementById("clickme-box").style.display = "none";
}

function moveRect() {
    const elem = document.getElementById("slide-bg");   
    let width = 0;
    id = setInterval(frame, 5);
    function frame() {
        if (width == 100) {
            clearInterval(id);
            setTimeout(showInstruction, 1000);
        } else {
            width++; 
            elem.style.width = width + "vw"; 
        }
    }
}

function showInstruction() {
    const elem = document.getElementById("main-show");   
    let opacity = 0;
    id = setInterval(frame, 5);
    function frame() {
        if (opacity > 1) {
            clearInterval(id);
            console.log("hji");
        } else {
            opacity = opacity + 0.01; 
            elem.style.opacity = opacity; 
        }
    }
    document.getElementById("main-show").style.display = "block";
    document.getElementById("viewing").style.display = "block";
}
