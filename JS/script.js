const piano = new Audio("assets/audio/piano.mp3");
const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.classList.add("star");

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*5+"s";

stars.appendChild(star);

}
const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
gsap.from(".hero h1", {
    duration: 1.5,
    y: 80,
    opacity: 0,
    ease: "power4.out"
});

gsap.from(".hero p", {
    duration: 1.5,
    delay: 0.4,
    y: 40,
    opacity: 0,
    ease: "power4.out"
});

gsap.from(".hero button", {
    duration: 1.5,
    delay: 0.8,
    scale: 0.5,
    opacity: 0,
    ease: "back.out(1.7)"
});
const messages = [

"Hey Unnati...",

"I made something for you.",

"Please wear your headphones 🎧"

];

let index = 0;

const typing = document.getElementById("typing");

const startBtn = document.getElementById("startBtn");

function showMessage(){

typing.innerHTML = messages[index];

index++;

if(index < messages.length){

setTimeout(showMessage,2200);

}else{

startBtn.style.display="block";

}

}

showMessage();

startBtn.onclick=()=>{

document.getElementById("intro").style.display="none";

document.getElementById("mainSite").style.display="flex";

}

const storyLines = [

"I still remember that day...",

"You were my senior.",

"I didn't know your name.",

"I didn't know your story.",

"But somehow...",

"My heart already did ❤️"

];

const storyText = document.getElementById("storyText");

let currentLine = 0;

function playStory(){

storyText.style.opacity=0;

setTimeout(()=>{

storyText.innerHTML=storyLines[currentLine];

storyText.style.opacity=1;

currentLine++;

if (currentLine < storyLines.length) {

    setTimeout(playStory, 2200);

} else {

    setTimeout(() => {

        endScene();

    }, 2500);

}

},600);

}

playStory();
function endScene(){

const fade=document.getElementById("cinemaFade");

fade.classList.add("active");

setTimeout(()=>{

piano.play();

},800);

setTimeout(()=>{

document.getElementById("chapter2").scrollIntoView({

behavior:"smooth"

});

fade.classList.remove("active");

},1800);

}

/* ==========================================
   MEMORY SCENE
========================================== */

const memories = [

{
image:"images/photo1.jpeg",
caption:"The smile that changed everything ❤️"
},

{
image:"images/photo2.jpeg",
caption:"Every little journey became beautiful because you were beside me."
},

{
image:"images/photo3.jpeg",
caption:"Some sunsets are beautiful... but none as beautiful as your smile."
},

{
image:"images/photo4.jpeg",
caption:"If I could relive one memory forever... it would be us."
},
{
image:"images/photo5.jpeg",
caption:"The day I realised... happiness had your face."
}
];

let memoryIndex = 0;

const memoryImage = document.getElementById("memoryImage");

const memoryCaption = document.getElementById("memoryCaption");

const memoryCard = document.querySelector(".memory-card");

function nextMemory(){

    console.log("Changing Memory:", memoryIndex);

    memoryCard.style.opacity = 0;

    setTimeout(()=>{

        memoryIndex++;

        console.log("Now index =", memoryIndex);

        if(memoryIndex >= memories.length){

            console.log("Finished memories");

            setTimeout(()=>{

                document.getElementById("letters").scrollIntoView({
                    behavior:"smooth"
                });

                showLetter();

            },2500);

            return;
        }

        console.log(memories[memoryIndex]);

        memoryImage.src = memories[memoryIndex].image;
        memoryCaption.innerHTML = memories[memoryIndex].caption;

        memoryCard.style.opacity = 1;

        // VERY IMPORTANT
        setTimeout(nextMemory,6000);

    },900);

}
memoryImage.src = memories[0].image;

memoryCaption.innerHTML = memories[0].caption;

memoryCard.style.opacity = 1;

setTimeout(nextMemory,6000);

/* =====================================
   FIVE TINY LETTERS
===================================== */

const letters=[

{
title:"❤️ If I Could Change One Thing...",
text:"I wouldn't change my life.\n\nI'd simply meet you much earlier.\n\nBecause every year before you now feels incomplete."
},

{
title:"😊 Your Laugh",
text:"Your laugh has always been my favourite sound.\n\nEven when you're angry...\n\nI secretly find you adorable."
},

{
title:"☁️ Home",
text:"Every time I'm with you...\n\nI feel like I'm sitting on a cloud.\n\nWatching the whole world disappear.\n\nJust you.\nJust me."
},

{
title:"🌌 That Night",
text:"A dark sky.\n\nYour lap.\n\nA thousand stars.\n\nYet somehow...\n\nI only kept looking at you."
},

{
title:"♾️ One Promise",
text:"Let's live...\n\nThis entire life...\n\nTogether ❤️"
}

];

let currentLetter=0;

const letterTitle=document.getElementById("letterTitle");

const letterText=document.getElementById("letterText");

const letterCard=document.querySelector(".letter-card");

function showLetter(){

    if(currentLetter>=letters.length){

        return;

    }

    letterTitle.innerHTML=letters[currentLetter].title;

    letterText.innerHTML="";

    document.querySelector(".signature").style.opacity=0;

    let text=letters[currentLetter].text;

    let i=0;

    function type(){

        if(i<text.length){

            letterText.innerHTML+=text.charAt(i);

            i++;

            setTimeout(type,35);

        }

        else{

            document.querySelector(".signature").style.opacity=1;

            currentLetter++;

            if(currentLetter < letters.length){

                setTimeout(showLetter,5000);

            }
            else{

                setTimeout(()=>{

                    document.getElementById("counterSection").scrollIntoView({

                    behavior:"smooth"

                });

                    startLoveCounter();

                },3000);

            }

        }

    }

    type();

}

/* =====================================
   Memory Counter
===================================== */
function startLoveCounter(){

    const startDate = new Date("2018-01-24T01:00:00");

    const counter = document.getElementById("loveCounter");

    const timer = setInterval(()=>{

    const now = new Date();

    let diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    diff %= (1000*60*60*24);

    const hours = Math.floor(diff/(1000*60*60));

    diff %= (1000*60*60);

    const minutes = Math.floor(diff/(1000*60));

    diff %= (1000*60);

    const seconds = Math.floor(diff/1000);

    counter.innerHTML = `
        <div>${days} Days</div>
        <div>${hours} Hours</div>
        <div>${minutes} Minutes</div>
        <div>${seconds} Seconds</div>
    `;

},1000);


// After 10 seconds...
setTimeout(()=>{

    clearInterval(timer);

    startEnding();

},10000);

}




/* =====================================
   Ending scene
===================================== */
function startEnding(){

    const ending=document.getElementById("endingText");

    const lines=[

"Sometimes...\nI wonder...",

"Why did I meet you so late?",

"Then I smile...\nBecause...",

"At least...\nI met you. ❤️",

"Every beautiful story\nhas a favourite chapter.\n\nMine...\nwill always be you.",

"Will you keep writing\n\nthe rest of this story\n\nwith me?\n\n∞"

];

let i=0;

document.getElementById("ending").scrollIntoView({

behavior:"smooth"

});

function next(){

ending.style.opacity=0;

setTimeout(()=>{

ending.innerHTML=lines[i];

ending.style.opacity=1;

i++;

if(i < lines.length){

    setTimeout(next,4500);

}
else{

    setTimeout(()=>{

        startFinalQuestion();

    },3500);

}

},800);

}

next();

}
/* =====================================
   Final Yes
===================================== */

function startFinalQuestion(){

    document.getElementById("finalQuestion").scrollIntoView({

        behavior:"smooth"

    });

    setTimeout(()=>{

        document.getElementById("yesBtn").classList.add("show");

    },3000);

}
document.getElementById("yesBtn").onclick = function(){

    document.body.innerHTML = `

    <section style="

        height:100vh;

        display:flex;

        flex-direction:column;

        justify-content:center;

        align-items:center;

        background:#050814;

        color:white;

        text-align:center;

        font-family:Poppins,sans-serif;

        animation:fadeIn 2s;

    ">

        <h1 style="font-size:60px;">
            Thank You ❤️
        </h1>

        <p style="font-size:28px; margin-top:35px; line-height:1.8; max-width:800px;">

            Thank you...

            <br><br>

            for choosing us.

            <br><br>

            I promise I'll spend the rest of my life

            trying to deserve that click.

            <br><br>

            I love you,

            Unnati.

            <br><br>

            Forever.

            ∞

        </p>

        <div style="margin-top:90px;opacity:.7;">

            Made with all my heart.

            <br>

            — Rishabh ❤️

        </div>

    </section>

    `;

}
