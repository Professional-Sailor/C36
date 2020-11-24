class player{
    constructor(){

    }
    getcount(){
        var PLAYERCOUNT = database.ref('playercount');
        PLAYERCOUNT.on('value',function(data){
            playercount = data.val();
        })
        
    }
    updateCount(count){
        database.ref('/').update({playercount: count});
    }
    updatename(NAME){
        var index = "player"+ playercount;
        database.ref(index).set({name: NAME})
    }
}