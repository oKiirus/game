
var playbutton, aboutbutton
var gameState="wait"
var bg1

function preload(){
    bg1 = loadImage('bg1.jpeg')
}

function setup(){
createCanvas(windowWidth,windowHeight)
background(0)
    
    playbutton = createImg("play.png")
    playbutton.position(100,200)
playbutton.size(100,100)


    aboutbutton=createButton("About the Game")
    aboutbutton.position(100, 150)

    homebutton= createButton("Home")

}

function draw(){
 

    if(gameState==="wait"){
        background(bg1)
    }
    
    if(playbutton.mousePressed(()=>{
        gameState="play"
    }))


    if (gameState==="play"){        
        background(255)
        playbutton.hide()
    }

    if(aboutbutton.mousePressed(()=>{
        gameState="about"
            }))
        {}


    if(gameState==="about"){
        background("cyan")
        aboutbutton.hide()
    }
        
    if(homebutton.mousePressed(()=>{
        gameState="home"
                }))
            {}


    if(gameState==="home"){
        background("cyan")
        aboutbutton.hide()
    }
    
    


    if (gameState ==="wait"){
        textSize(50)
        fill("yellow")
        stroke(0)
        strokeWeight(5)
   text("LOST IN SPACE !! ",windowWidth/2-200,50)
    }
}