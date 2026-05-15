/* FORCE PAGE TO TOP */

window.onbeforeunload = function () {

    window.scrollTo(0,0);
};



/* TEXT */

const titleText = "Happy Birthday Mom ❤️";

const subtitleText = "By your son Junior ❤️";

const messageText = `Happy Birthday Mom 🎉❤️🌹

Today is not just the celebration of your birth, but the celebration of the strongest woman I know 💪❤️ You carried pain with strength, faced struggles with courage, and still managed to give love with the purest heart 🤍 Everything good in me comes from you. Your sacrifices, your prayers 🙏, your sleepless nights, and your endless support built the person I am becoming today 🌟

No words can truly explain how much you mean to me 🥺❤️ You are my protector 🛡️, my teacher 📚, my safe place 🏡, and my biggest blessing ✨ Even when life becomes hard, your love gives me strength to keep going 💯 I thank God every day for giving me a mother like you 🙏❤️

I promise to make you proud one day 🌍🏆 and give you the life you deserve after everything you have done for me 💐 You deserve happiness 😊, peace 🕊️, love ❤️, and every beautiful thing this world can offer 🌸✨

May this birthday bring you joy 🎂, long life 🌹, good health 💖, and endless blessings 🙏✨ I love you more than words can ever explain ❤️

From your son, Junior ❤️`;



/* IMAGES */

const images = [

    "images/mom1.png",
    "images/mom2.png",
    "images/mom3.png",
    "images/mom4.png",
    "images/mom5.png",
    "images/mom6.png"
];



/* VARIABLES */

let current = 0;

let paused = false;

const music =
document.getElementById("bg-music");

const musicBtn =
document.getElementById("music-btn");



/* MUSIC BUTTON */

musicBtn.addEventListener("click", () => {

    music.volume = 0.4;

    music.play();

    musicBtn.style.display = "none";
});



/* TYPING EFFECT */

function typeText(elementId, text, speed){

    let i = 0;

    const element =
    document.getElementById(elementId);

    element.innerHTML = "";

    function typing(){

        if(i < text.length){

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, speed);
        }
    }

    typing();
}



/* SLIDESHOW */

function startSlideshow(){

    const slider =
    document.getElementById("background-slider");

    slider.style.backgroundImage =
    `url('${images[current]}')`;



    setInterval(() => {

        if(!paused){

            current++;

            if(current >= images.length){

                current = 0;
            }

            slider.style.backgroundImage =
            `url('${images[current]}')`;
        }

    }, 6000);
}



/* WEBSITE START */

window.onload = () => {

    window.scrollTo(0,0);



    /* TITLE */

    typeText("title", titleText, 90);



    /* SUBTITLE */

    setTimeout(() => {

        typeText("subtitle", subtitleText, 60);

    }, 2000);



    /* START SLIDESHOW */

    startSlideshow();



    /* REMOVE COVER */

    setTimeout(() => {

        const cover =
        document.getElementById("cover-page");

        cover.style.opacity = "0";



        setTimeout(() => {

            cover.style.display = "none";



            /* MESSAGE */

            typeText("message", messageText, 18);

        }, 1500);

    }, 5000);
};



/* HOLD TO PAUSE */

document.addEventListener("touchstart", () => {

    paused = true;

});

document.addEventListener("touchend", () => {

    paused = false;

});