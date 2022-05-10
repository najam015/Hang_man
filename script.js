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
let result = document.getElementById('chosenCategary');
let Clue = document.getElementById('Clue');

words = ['milk','good','bad','number','learning','gaming','element','html','javascript']
parts = ['stand','danda','leftleg','rightleg','lefthand','righthand','neck','head','hang','hangStand']

let counter = 0;
let retry = 10;
let userPressedWord = '';
let string = '';
console.log(string)

generateGame();
//str.includes("Geeks");

// split rendom string 
playAgain.style.display = 'none';
//var chars = randomWords.split('');
//console.log(chars)
//totalChars = chars.length
//result.innerHTML += chars;

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


function typeWord(w){
    userPressedWord = w;
    console.log(userPressedWord);
    isStringIncludes(userPressedWord)
}


function mekeRandomStr(str){   
        var sb = str;
         
        sb += (str);
      
        for (var i = 0; i < str.length; i++)
        {
            for (var j = 0; j != str.length; j++)
            Clue.innerHTML = (sb.charAt(i + j));
        }
    }


function isStringIncludes(a) {
    var check = string.includes(a);
    console.log(check)

    if(check == string){
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
    a.style.background = '#c0d72e'
    TryRemainsBack()
    counter ++;
}

function TryRemainsBack(){
    if(retry <= 0 ){
        Clue.innerHTML = 'You Lose Game!';
        playAgain.style.display = 'block'
    }

}