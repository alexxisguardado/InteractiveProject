let crystalball1;
let titleText;
let liltitle;


function preload(){
    crystalball1 = loadImage('crystalBall_IMG.png'); 
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    let button = createButton('click me');
    button.position(740, 490);
    button.mousePressed(generateAndDisplayFortune);
} 

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

//crystal ball placement
function draw() {
    background(120,1,140,2.00); 
    let scale = 2; 
    let scaledWidth = crystalball1.width * scale;
    let scaledHeight = crystalball1.height * scale;
    image(crystalball1, width / 3.1, height / 5.6, scaledWidth, scaledHeight); 

//TITLE Text
    titleText = createP('PSYCHIC');
    titleText.position(0, 0); 
    titleText.style('color', 'yellow'); 
    titleText.style('font-size', '80px'); 
    titleText.style('text-align', 'center'); 
    titleText.style('width', '100%');

    liltitle = createP('Ask any ? and receive an answer from the Universe');
    liltitle.position(600,150);
    liltitle.style('color', 'white');
}

//fortune responses 1-10
function generateFortune(){
    let num = Math.floor(Math.random()*10+1);
    let fortune;

    switch(num) {
        case 1:
            fortune = 'The universe is on your side'; 
            break;
        case 2:
            fortune = 'Ask again later';
            break;
        case 3:
            fortune = 'Very Likely';
            break;
        case 4:
            fortune = 'My Sources say NO';
            break;
        case 5:
            fortune = "Don't Count on it";
            break;
        case 6:
            fortune = 'YES! Definitely';
            break;
        case 7:
            fortune = 'Trust your gut feeling';
            break;
        case 8:
            fortune = 'Be careful with what you ask for'; 
            break;
        case 9:
            fortune = 'NO!';
            break;
        case 10:
            fortune = 'Your Future is BRIGHT';
            break;
    }
    return fortune;
}

//user interactive response 
function generateAndDisplayFortune() {
  let fortune = generateFortune();
  fortuneText = fortune;
  displayFortune();
}

function displayFortune() {
  let existingFortuneDisplay = select('#fortuneDisplay');
  if (existingFortuneDisplay) {
    existingFortuneDisplay.remove();
  }

//fortue being displayed 
let fortuneDisplay = createP(fortuneText);
fortuneDisplay.style('color', 'black');
fortuneDisplay.style('font-size', '20px');
fortuneDisplay.style('text-align', 'center');
fortuneDisplay.id('fortuneDisplay');

// Center the fortune text horizontally and vertically
fortuneDisplay.position(width / 2 - fortuneDisplay.elt.offsetWidth / 15, height / 2 - fortuneDisplay.elt.offsetHeight / 4);
}
