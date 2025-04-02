let button = document.getElementsByClassName("btn");
let player = document.getElementById("player");
let computer = document.getElementById("computer");
// playerscore display 
let pscore = document.getElementById("player-res");
let mscore = document.getElementById("main-result")
let cscore = document.getElementById("computer-res")

let finalcount = document.getElementById("life");

//chosen images
let player_img = document.getElementById("player-image");
let computer_img = document.getElementById("computer-image");

//winning and losing count
let player_count_limit = 0;
let computer_count_limit = 0;
let totalLimit = 10;

//necessary elements to shown or not shown
let display_div = document.getElementById("display-game");
let result_div = document.getElementById("result-content");
let controls_div = document.getElementById("controls");
let vImg = document.getElementById("v-img")
let removeElements = document.getElementsByClassName("one");
let dimage = document.getElementById("d-img")
let drimage = document.getElementById("dr-img")

let container = document.getElementById("main-container");


function getValues(e) {
    let imageSRC = e.target.src;
    let imageId = e.target.getAttribute("alt")
    let arr = ["rock", "paper", "scissors", "paper", "scissors", "rock", "scissors"]
    let random = Math.floor(Math.random() * arr.length);
    let random_img = arr[random];

    //computer image
    player_img.src = imageSRC;
    computer_img.src = `assets/${random_img}.PNG`;
    checkResult(imageId, random_img, totalLimit);
}

// reset back all
function resetAll() {
    pscore.textContent = "Human : 0";
    cscore.textContent = "Computer : 0";
    mscore.textContent = "Result";
    finalcount.textContent = "Life: 0"
    totalLimit = 10;
    computer_count_limit = 0;
    player_count_limit = 0;


    pscore.classList.remove("wining-animation")
    mscore.classList.remove("wining-animation")
    cscore.classList.remove("wining-animation")

    pscore.style.textShadow = "none"
    mscore.style.textShadow = "none"
    cscore.style.textShadow = "none"

}

// checking result based on count
function checkResult(player, computer) {
    totalLimit--;
    if (totalLimit === 0) {
        finalResult();
    } else {
        if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) {
            player_count_limit++;
            pscore.innerHTML = `Chief : ${player_count_limit}`
            mscore.innerText = "Chief Won"

            pscore.classList.add("wining-animation")
            mscore.classList.remove("wining-animation")
            cscore.classList.remove("wining-animation")

            pscore.style.textShadow = "1px 2px 25px white"
            mscore.style.textShadow = "none"
            cscore.style.textShadow = "none"


        } else if (player === computer) {
            mscore.innerText = "Is'z Draw"

            mscore.classList.add("wining-animation")
            pscore.classList.remove("wining-animation")
            cscore.classList.remove("wining-animation")

            mscore.style.textShadow = "1px 2px 25px white"
            pscore.style.textShadow = "none"
            cscore.style.textShadow = "none"
        }
        else {
            computer_count_limit++;
            mscore.innerText = "Opponent Won"
            cscore.innerHTML = `Enemy : ${computer_count_limit}`
        
            cscore.classList.add("wining-animation")
            pscore.classList.remove("wining-animation")
            mscore.classList.remove("wining-animation")
            
            cscore.style.textShadow = "1px 2px 25px white"
            pscore.style.textShadow = "none"
            mscore.style.textShadow = "none"

        }
    }
    finalcount.innerHTML = `Life: ${totalLimit}`
}

// starting action
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", getValues)
}

let title = document.getElementById("title-tag");

// final action show the animation
function finalResult() {
    if (player_count_limit > computer_count_limit) {
        vImg.style.display = "block";
        container.style.backdropFilter = "blur(2px)";
        vImg.addEventListener("animationend", finalAnimation);
    } else if (computer_count_limit > player_count_limit) {
        dimage.style.display = "block";
        container.style.backdropFilter = "blur(2px)";
        dimage.addEventListener("animationend", finalAnimation);
    } else {
        drimage.style.display = "block";
        container.style.backdropFilter = "blur(2px)";
        drimage.addEventListener("animationend", finalAnimation);
    }
    title.style.zIndex = 999;
    result_div.style.display = "none";
    controls_div.style.display = "none"
    for (let i = 0; i < removeElements.length; i++) {
        removeElements[i].style.display = "none"
    }
    display_div.style.display = "none";
    totalLimit = 10;
    resetAll();
}


// reset back animation
function finalAnimation() {
    for (let i = 0; i < removeElements.length; i++) {
        removeElements[i].style.display = "block"
    }
    vImg.style.display = "none";
    display_div.style.display = "flex";
    container.style.backdropFilter = "none";
    dimage.style.display = "none";
    drimage.style.display = "none";
    result_div.style.display = "flex";
    controls_div.style.display = "flex"
    computer_img.src = "assets/queen.png";
    player_img.src = "assets/king.png";
}
