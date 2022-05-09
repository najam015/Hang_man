
//controllers btns
hint = document.getElementById('hint');
playAgain = document.getElementById('playAgain');

//body parts
hang = document.getElementById('hang');
head = document.getElementById('head');
neck = document.getElementById('neck');
rightHand = document.getElementById('righthand');
leftHand = document.getElementById('lefthand');
rightLeg = document.getElementById('rightleg');
leftLeg = document.getElementById('leftleg');
danda = document.getElementById('danda');
stand = document.getElementById('stand');

words = [
    'milk',
    'good',
    'bad',
    'number',
    'learning',
    'gaming',
    'element',
    'html',
    'javascript'
]

parts = [
    'stand',
    'danda',
    'leftleg',
    'rightleg',
    'lefthand',
    'righthand',
    'neck',
    'head',
    'hang'
]

let counter = 0;
let retry = 10;
let userPressedWord = '';
let randomWords = words[Math.floor(Math.random() * words.length)]
console.log(randomWords)

//str.includes("Geeks");

function typeWord(w){
    userPressedWord = w;
    console.log(userPressedWord);
}

function isStringIncludes() {
    var check = randomWords.includes('userPressedWord', 18);
    console.log(check)

    if(check == randomWords){
        //show pressed words on screen 

    }
    else{
        retry -=1;
        showManPart()
    }

}


function showManPart() {
    a = parts[counter];
    a.style.display.block;
    indexNextPart()
}

function indexNextPart(){
    counter ++;
}