// Sounds
let dieSound = new Audio('assets/die.wav');
let hintSound = new Audio('assets/notify.wav');
let winSound = new Audio('assets/gameWin.wav');
let keyPressSound = new Audio('assets/keyPress.wav');

//controllers btns
hint = document.getElementById('hint');
playAgain = document.getElementById('restart');

//body parts
let hang = document.getElementById('hang');
let head = document.getElementById('head');
let neck = document.getElementById('neack');
let rightHand = document.getElementById('righthand');
let leftHand = document.getElementById('lefthand');
let rightLeg = document.getElementById('rightleg');
let leftLeg = document.getElementById('leftleg');
let danda = document.getElementById('danda');
let stand = document.getElementById('stand');
let hangStand = document.getElementById('hangStand');

const wrapper = document.querySelector('#chosenCategary')
let attemps = document.querySelector('#attemps');
let result = document.getElementById('chosenCategary');
let Clue = document.getElementById('Clue');

words = ['milk','good','bad','number','learning','gaming','element','html','javascript']

let winCount = '';
let counter = 0;
let retry = 10;
let userPressedWord = '';
let randomNum = '';
console.log(randomNum)

parts = [
    stand,
    danda,
    hangStand,
    hang,
    head,
    neck,
    leftHand,
    rightHand,
    leftLeg,
    rightLeg
]

generateGame();

function generateElements(randomNum){
    let chars = randomNum.split('');
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
  randomNum = words[index];
  console.log('Random WOrd is:', randomNum)
  generateElements(randomNum)
}

function showHidenChars(randomNum, userPressedWord){
        var check = randomNum.includes(userPressedWord);
        
        if(check){
            var char = document.getElementsByClassName(userPressedWord);

            for ( j = 0; j < char.length; j++) {
                char[j].classList.add('chita');
              }
        }
}

function typeWord(w){
    keyPressSound.play();
    userPressedWord = w;

    console.log('user pressed', userPressedWord, userPressedWord.length);
    isStringIncludes(userPressedWord);

}

function shuffle(s) {
    var arr = s.split('');           
    arr.sort(function() {
      return 0.5 - Math.random();
    });
    s = arr.join('');                
    return s;                        
  }

  function showHint(randomNum){
    hintSound.play();
    var s = randomNum;
    s = shuffle(s);
    Clue.innerHTML = s;
  }

function isStringIncludes(userPressedWord) {
    var check = randomNum.includes(userPressedWord);
    console.log('Random WOrd is:', randomNum)
    console.log('user pressed:', userPressedWord, ' = ' ,check)

    if(check){
        showHidenChars(randomNum, userPressedWord);
    }
    else{
        retry--;
        attemps.innerHTML = "Remaning Attemps:"+ retry;
        showManPart();
    }
}

function showManPart() {
    remaningTries()
    var part = parts[counter];
    counter ++;
    part.classList.add("white");
}

function remaningTries(){
    if(retry <= 0 ){
        dieSound.play();
        Clue.innerHTML = 'You Lose Game!';
    }
}

function winGame(randomNum){
    let chars = randomNum.split('');
    console.log("chars lenth = ", chars.length)
    if(chars.length == winCount ){
        winSound.play();
        Clue.innerHTML = 'You Win The Game!';
    }
    
}

function disableBtn(userPressedWord){
    if(userPressedWord){
        document.getElementById(userPressedWord.toLowerCase()).disabled = true;
        winCount += userPressedWord.length;
        console.log("win count = ", winCount);
    }

}