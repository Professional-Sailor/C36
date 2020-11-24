class game{
    constructor(){

    }
    getState(){
        var state1 = database.ref('gameSate');
        state1.on('value',function(data){
            gamestate = data.val();
        })
    }
    start(){
        if(gamestate===0){
            Player = new player();
            Form = new form();
            Player.getcount();
            Form.display();
        }
    }
    update(state){
        database.ref('/').update({gameSate: state});
    }
}