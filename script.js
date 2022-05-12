// Sounds
let dieSound = new Audio('assets/die.wav');
let hintSound = new Audio('assets/notify.wav');
let winSound = new Audio('assets/gameWin.wav');
let keyPressSound = new Audio('assets/keyPress.wav');

//controllers btns
hint = document.getElementById('hint');
playAgain = document.getElementById('restart');
const wrapper = document.querySelector('#chosenCategary')

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

let attemps = document.querySelector('#attemps');
let result = document.getElementById('chosenCategary');
let Clue = document.getElementById('Clue');

words = ['milk','good','bad','number','learning','gaming','element','html','javascript']
parts = ['stand','danda','leftLeg','rightLeg','leftHand','rightHand','neck','head','hang','hangStand']

let counter = 0;
let retry = 10;
let userPressedWord = '';
let string = '';
console.log(string)

generateGame();

function generateElements(string){
    var chars = string.split('');
    for(i=0; i<chars.length; i++){
        var div = document.createElement('div');
        var char = chars[i];
        div.innerHTML = char;
        div.classList.add("box")
        div.classList.add(char.toLowerCase())
        wrapper.appendChild(div);
    }
}

function generateGame(){
  var index = Math.ceil(Math.random() * (words.length - 1))
  string = words[index];
  generateElements(string)
  console.log(string)
}

function showHidenChars(string){
    var chars = string.split('');
    for(i = 0; i < chars.length; i++){
        var char = chars[i];
        var div = document.getElementsByClassName(char.toLowerCase());
        div.classList.add("white")
        wrapper.appendChild(div);
    }

}

function typeWord(w){
    keyPressSound.play();
    userPressedWord = w;
    console.log('user pressed', userPressedWord);
    isStringIncludes(userPressedWord)
}

function shuffle(s) {
    var arr = s.split('');           

    arr.sort(function() {
      return 0.5 - Math.random();
    });
    s = arr.join('');                
    return s;                        
  }

  function showHint(string){
    hintSound.play();
    var s = string;
    s = shuffle(s);
    Clue.innerHTML = s;
  }

function isStringIncludes(userPressedWord) {
    var check = string.includes(userPressedWord);
    console.log('Random WOrd is', string)
    console.log('najam is testing',check)

    if(check == true){
        showHidenChars(string);
    }
    else{
        retry -=1;
        showManPart()
        console.log('Retry Left Back', retry)
        attemps.innerHTML = "Remaning Attemps:"+ retry;
    }

}

function showManPart() {
    a = parts[counter];
    console.log(a);
    TryRemainsBack()
    counter ++;
}

function TryRemainsBack(){
    if(retry <= 0 ){
        dieSound.play();
        Clue.innerHTML = 'You Lose Game!';
    }

}