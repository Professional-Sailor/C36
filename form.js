class form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(200,60);
        var input = createInput();
        input.position(200,200)
        var button = createButton("Play");
        button.position(200,300)
        var greet = createElement('h4');
        
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var txtread = input.value();
            playercount++
            Player.updateCount(playercount);
            Player.updatename(txtread);
            greet.html("Hello "+ txtread);
            greet.position(130,200);
        })
    }
}