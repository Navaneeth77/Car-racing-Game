class Player{
    constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
    }
    getCount(){
        var playerCountref = database.ref('playercount');
        playerCountref.on("value",function(data){
            playerCount= data.val();
        })
    }
    updateCount(count){
   database.ref('/').update({
       playercount: count
   })
   
    }
   update(){
 var playerIndex = "players/player" + this.index;
 database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance

 })
   
    }
   static getPlayerinfo(){
   var playerInforef = database.ref('players');
   playerInforef.on("value",(data)=>{
       allPlayers = data.val();
   })
    }
    static updateRank(rank){
        database.ref('/').update({
            Playerrank:rank 
            
        })
    }
}
