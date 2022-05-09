//key board
a = document.getElementById('a');
b = document.getElementById('b');
c = document.getElementById('c');
d = document.getElementById('d');
e = document.getElementById('e');
f = document.getElementById('f');
g = document.getElementById('g');
h = document.getElementById('h');
i = document.getElementById('i');
j = document.getElementById('j');
k = document.getElementById('k');
l = document.getElementById('l');
m = document.getElementById('m');
n = document.getElementById('n');
o = document.getElementById('o');
p = document.getElementById('p');
q = document.getElementById('q');
r = document.getElementById('r');
s = document.getElementById('s');
t = document.getElementById('t');
u = document.getElementById('u');
v = document.getElementById('v');
w = document.getElementById('w');
x = document.getElementById('x');
y = document.getElementById('y');
z = document.getElementById('z');

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

    let randomWords = words[Math.floor(Math.random() * words.length)]
    console.log(randomWords)