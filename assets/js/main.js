// P5.JS Project - https://p5js.org/

var w, h

class Raindrop{

    constructor(){
        this.x=random()*w-w/2
        this.z=random()*w-w/2
        this.y=-h
        this.dy=0
        this.ddy=0.05
    }
    update(){
        this.dy+=this.ddy
        this.y+=this.dy
        if(this.y>h){
            this.y=-h
            this.dy=0
        }
    }
    draw(){
        push()
        translate(this.x,this.y,this.z)
        normalMaterial()
        sphere(3,13,33)
        pop()
    }
}

function preload(){
    
}


let drops=[]
function setup(){
    createCanvas(w=displayWidth,h=displayHeight-160,WEBGL)
    for(let i=0;i<10;++i){
        drops.push(new Raindrop())
    }
}

function draw(){
    background(19)
    orbitControl()
    ambientLight(55)
    for(let d of drops){
        d.update()
        d.draw()
    }
    if(drops.length<400) drops.push(new Raindrop())
}
//END


