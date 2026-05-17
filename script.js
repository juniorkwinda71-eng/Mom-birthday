window.onbeforeunload = function () {

    window.scrollTo(0,0);
};



const titleText = "Happy Birthday Mom ❤️";

const subtitleText = "By your son Junior ❤️";

const messageText = `Happy Birthday Mom 🎉❤️🌹

const messageText = `Happy Birthday Mom 🎉❤️🌹

Today we celebrate not only your birthday, but the incredible woman you are 💪❤️ Thank you for every sacrifice, every prayer 🙏, every sleepless night, and every moment of love you gave me. Everything good in my life started with you 🌟

You are my protector 🛡️, my teacher 📚, my safe place 🏡, and my greatest blessing ✨ Your strength inspires me every single day, and your love gives me courage to keep going no matter how hard life gets ❤️

I promise to make you proud one day 🌍🏆 and give you the happiness and peace you truly deserve 💐

May God bless you with long life 🌹, good health 💖, endless joy 😊, and beautiful memories ✨

I love you more than words can explain ❤️

From your son, Junior ❤️`;



const images = [

    "images/mom1.png",
    "images/mom2.png",
    "images/mom3.png",
    "images/mom4.png",
    "images/mom5.png",
    "images/mom6.png"
];



let current = 0;

let paused = false;

const music =
document.getElementById("bg-music");



/* TYPE EFFECT */

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



/* START BUTTON */

const startBtn =
document.getElementById("start-btn");



startBtn.addEventListener("click", () => {

    music.volume = 0.4;

    music.play();



    startBtn.style.display = "none";



    const countdown =
    document.getElementById("countdown");



    countdown.style.opacity = "1";



    let num = 1;



    const counter = setInterval(() => {

        countdown.innerHTML = num;

        num++;



        if(num > 37){

            clearInterval(counter);



            countdown.innerHTML = "❤️";



            setTimeout(() => {

                const intro =
                document.getElementById("intro-page");



                intro.style.opacity = "0";



                setTimeout(() => {

                    intro.style.display = "none";



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



                            typeText(
                                "message",
                                messageText,
                                18
                            );

                        }, 1500);

                    }, 5000);

                }, 1200);

            }, 1000);
        }

    }, 320);
});



/* HOLD TO PAUSE */

document.addEventListener("touchstart", () => {

    paused = true;

});

document.addEventListener("touchend", () => {

    paused = false;

});



/* STOP MUSIC */

window.addEventListener("beforeunload", () => {

    music.pause();

    music.currentTime = 0;
});
