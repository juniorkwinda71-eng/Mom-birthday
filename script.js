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



/* START MUSIC ON TOUCH OR SWIPE */

function startMusic(){

    music.volume = 0.4;

    music.play();



    document.removeEventListener(
        "touchstart",
        startMusic
    );

    document.removeEventListener(
        "touchmove",
        startMusic
    );

    document.removeEventListener(
        "scroll",
        startMusic
    );
}



/* START WHEN USER TOUCHES OR SWIPES */

document.addEventListener(
    "touchstart",
    startMusic,
    { once:true }
);

document.addEventListener(
    "touchmove",
    startMusic,
    { once:true }
);

document.addEventListener(
    "scroll",
    startMusic,
    { once:true }
);



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



/* SMOOTH SLIDESHOW */

function startSlideshow(){

    const bg1 =
    document.getElementById("bg1");

    const bg2 =
    document.getElementById("bg2");

    let showingBg1 = true;



    setInterval(() => {

        if(!paused){

            current++;

            if(current >= images.length){

                current = 0;
            }



            if(showingBg1){

                bg2.style.backgroundImage =
                `url('${images[current]}')`;

                bg2.style.opacity = "1";

                bg1.style.opacity = "0";

            }

            else{

                bg1.style.backgroundImage =
                `url('${images[current]}')`;

                bg1.style.opacity = "1";

                bg2.style.opacity = "0";
            }



            showingBg1 = !showingBg1;
        }

    }, 6000);
}



/* WEBSITE START */

window.onload = () => {

    window.scrollTo(0,0);



    typeText("title", titleText, 90);



    setTimeout(() => {

        typeText("subtitle", subtitleText, 60);

    }, 2000);



    startSlideshow();



    setTimeout(() => {

        const cover =
        document.getElementById("cover-page");

        cover.style.opacity = "0";



        setTimeout(() => {

            cover.style.display = "none";

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



/* STOP MUSIC WHEN LEAVING */

window.addEventListener("beforeunload", () => {

    music.pause();

    music.currentTime = 0;
});
