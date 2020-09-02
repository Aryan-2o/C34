var ball;
var database, databaseBall;
var position;
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    databaseBall=database.ref('ball/Position')
    databaseBall.on("value", readposition, showerror)
}

function draw(){
    background(46,139,87);
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/Position').set({
   'x':position.x+x,
   'y':position.y+y
    })
}

function readposition(data ){
position= data.val()
ball.x=position.x
ball.y=position.y

}
function showerror(){
    console.log("wrong positions")
}