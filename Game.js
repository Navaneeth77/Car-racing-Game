class Game{
    constructor(){
    
    }
    getState(){
        var gamestateref = database.ref('gamestate');
        gamestateref.on("value",function(data){
            gameState= data.val();
        })
    }
    update(data){
   database.ref('/').update({
       gamestate: data
   })
   
    }
   async start(){
        if (gameState===0){
            player = new Player();
            var playerCountref=await database.ref('playercount').once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount();
            }
          
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addImage(car1image);
        car2 = createSprite(300,200);
        car2.addImage(car2image);
        car3 = createSprite(500,200);
        car3.addImage(car3image);
        car4 = createSprite(700,200);
        car4.addImage(car4image);
        cars = [car1,car2,car3,car4]

    }
    play(){
        form.hide();
        text("game start", 120,100);
        Player.getPlayerinfo();
        if(allPlayers!==undefined){
            image(trackimage,0,-displayHeight*4,displayWidth,displayHeight*5);
       var displayPosition = 130;
       var index = 0, x = 250, y;
       for(var plr in allPlayers){
     index = index+1
     x = x+200
     y = displayHeight-allPlayers[plr].distance;
     cars[index-1].x = x
     cars[index-1].y = y
     if(index===player.index){
         cars[index-1].shapeColor = "red";
         camera.position.x = displayWidth/2;
         camera.position.y= cars[index-1].y
         fill("red");
         textSize(20);
         text(allPlayers[plr].name,x,y-200)
         
     }
        }
    }
    if(keyDown(UP_ARROW)&&player.index!==null){
        player.distance += 50
        player.update();
    }
    if(player.distance>6500){
        gameState = 2;
        player.rank = player.rank+1
    Player.updateRank(player.rank);
    
    }
    drawSprites();
    }
}
