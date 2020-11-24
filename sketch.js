var database,gamestate=0,playercount,Player,Game,Form;

function setup(){
  database = firebase.database();
  
  createCanvas(400,400);
  Game = new game();

  Game.getState();
  
  Game.start();
  
}

function draw(){

  
}

