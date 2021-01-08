var database;
var position;
var gameState = 0,playerCount,form,player,game;
var allPlayers;
var car1,car1image,car2,car2image,car3,car3image,car4,car4image,cars,trackimage,ground,groundimage;
function preload(){
    car1image = loadImage("images/car1.png");
    car2image = loadImage("images/car2.png");
    car3image = loadImage("images/car3.png");
    car4image = loadImage("images/car4.png");
    trackimage = loadImage("images/track.jpg");
}
function setup(){
    database = firebase.database();

    createCanvas(displayWidth-20,displayHeight-30);
    game = new Game()
    game.getState()
    game.start()
   
}

function draw(){
 if(playerCount===4){
     game.update(1);

 }
 if(gameState===1){
     clear();
     game.play()
 }
    drawSprites();
}
