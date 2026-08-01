/* ==========================================
   BIRTHDAY WEBSITE
   SCRIPT.JS
   PART 3A
========================================== */

const loading=document.getElementById("loading");

const hero=document.getElementById("hero");

const envelope=document.getElementById("envelope");

const letter=document.getElementById("letter");

const gallery=document.getElementById("gallery");

const end=document.getElementById("end");

const sliderImage=document.getElementById("sliderImage");

const photoCounter=document.getElementById("photoCounter");

const sections=[

hero,
envelope,
letter,
gallery,
end

];

/* ==========================
   SHOW SECTION
========================== */

function hideAll(){

sections.forEach(section=>{

section.classList.remove("show");

section.style.display="none";

});

}

function showSection(section){

hideAll();

section.style.display="flex";

setTimeout(()=>{

section.classList.add("show");

},30);

}

/* ==========================
   LOADING
========================== */

window.onload=function(){

setTimeout(()=>{

loading.style.display="none";

showSection(hero);

},2500);

};

/* ==========================
   NAVIGATION
========================== */

function showEnvelope(){

showSection(envelope);

}

function openLetter(){

showSection(letter);

startTyping();

}

function showGallery(){

showSection(gallery);

showPhoto();

}

function finish(){

showSection(end);

startCelebration();

}

function restartJourney(){

location.reload();

}

/* ==========================
   TYPEWRITER
========================== */

const message=`Happy Birthday Forever Special ❤️

Today is all about celebrating you.

I hope this day brings you endless smiles,
beautiful memories,
and lots of happiness.

Thank you for being such an amazing person.

May all your dreams come true,
and may your life always be filled
with love,
success,
and laughter.

Happy Birthday once again Manahil ❤️

Forever cheering for you.

From,
Your Med.Store ❤️`;
let textIndex=0;

let typing=false;

function startTyping(){

if(typing)return;

typing=true;

const box=document.getElementById("typewriter");

box.innerHTML="";

textIndex=0;

type();

}

function type(){

const box=document.getElementById("typewriter");

if(textIndex<message.length){

box.innerHTML+=message.charAt(textIndex);

textIndex++;

setTimeout(type,35);

}

}

/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*5)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,400);

/* ==========================
   PHOTO SLIDER
========================== */

const photos=[

"images/photo1.jpeg",
"images/photo2.jpeg",
"images/photo3.jpeg",
"images/photo4.jpeg",
"images/photo5.jpeg",
"images/photo6.jpeg",
"images/photo7.jpeg",
"images/photo8.jpeg",
"images/photo9.jpeg",
"images/photo10.jpeg",
"images/photo11.jpeg",
"images/photo12.jpeg",
"images/photo13.jpeg",
"images/photo14.jpeg",
"images/photo15.jpeg",
"images/photo16.jpeg",
"images/photo17.jpeg",
"images/photo18.jpeg",
"images/photo19.jpeg",
"images/photo20.jpeg",
"images/photo21.jpeg",
"images/photo22.jpeg",
"images/photo23.jpeg",
"images/photo24.jpeg",
"images/photo25.jpeg"
];

let currentPhoto=0;

function showPhoto(){

sliderImage.src=photos[currentPhoto];

photoCounter.innerHTML=(currentPhoto+1)+" / "+photos.length;

}
/* ==========================
   NEXT / PREVIOUS
========================== */

function nextPhoto(){

currentPhoto++;

if(currentPhoto>=photos.length){

currentPhoto=0;

}

showPhoto();

}

function previousPhoto(){

currentPhoto--;

if(currentPhoto<0){

currentPhoto=photos.length-1;

}

showPhoto();

}

/* ==========================
   AUTO SLIDER
========================== */

let autoSlide;

function startSlider(){

clearInterval(autoSlide);

autoSlide=setInterval(()=>{

if(gallery.classList.contains("show")){

nextPhoto();

}

},4000);

}

startSlider();

/* ==========================
   SIMPLE CELEBRATION
========================== */

function startCelebration(){

for(let i=0;i<80;i++){

setTimeout(createHeart,i*80);

}

}

/* ==========================
   KEYBOARD SUPPORT
========================== */

document.addEventListener("keydown",function(e){

if(!gallery.classList.contains("show")) return;

if(e.key==="ArrowRight"){

nextPhoto();

}

if(e.key==="ArrowLeft"){

previousPhoto();

}

});

/* ==========================
   PREVENT IMAGE DRAG
========================== */

document.addEventListener("dragstart",function(e){

if(e.target.tagName==="IMG"){

e.preventDefault();

}

});

/* ==========================
   PHOTO LOADING
========================== */

photos.forEach(src=>{

const img=new Image();

img.src=src;

});

/* ==========================
   CLICK IMAGE TO NEXT
========================== */

if(sliderImage){

sliderImage.addEventListener("click",nextPhoto);

}

/* ==========================
   END OF SCRIPT
========================== */