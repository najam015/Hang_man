//controllers btns
hint = document.getElementById('hint');
playAgain = document.getElementById('playAgain');

//body parts
let hang = document.getElementById('hang');
let head = document.getElementById('head');
let neck = document.getElementById('neck');
let rightHand = document.getElementById('righthand');
let leftHand = document.getElementById('lefthand');
let rightLeg = document.getElementById('rightleg');
let leftLeg = document.getElementById('leftleg');
let danda = document.getElementById('danda');
let stand = document.getElementById('stand');
let hangStand = document.getElementById('hangStand');
let result = document.getElementById('chosenCategary');

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
    'hang',
    'hangStand'
]

let counter = 0;
let retry = 10;
let userPressedWord = '';
let randomWords = words[Math.floor(Math.random() * words.length)]
console.log(randomWords)

//str.includes("Geeks");

// split rendom string 
var chars = randomWords.split('');
console.log(chars)
totalChars = chars.length
result.innerHTML += chars;

function typeWord(w){
    userPressedWord = w;
    console.log(userPressedWord);
    isStringIncludes(userPressedWord)
}

function isStringIncludes(a) {
    var check = randomWords.includes(a);
    console.log(check)

    if(check == randomWords){
        userPressedWordIndex = chars.indexOf(userPressedWord)

        console.log('index of user pressed word is', userPressedWordIndex);
    }
    else{
        retry -=1;
        showManPart()
        console.log('Retry Left Back', retry)
    }

}

function showManPart() {
    a = parts[counter];
    a.style.display = 'block';
    counter ++;
}