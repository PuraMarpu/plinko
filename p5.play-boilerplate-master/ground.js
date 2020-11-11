class ground{
    constructor(){
        var op ={
            isStatic:true,
            restitution:0.4,
            friction:0.4
        }
        this.dust =Bodies.rectangle(300,655,600,10,op);
        World.add(world,this.dust);
    }
    display(){
        var pos = this.dust.position;

        push();
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,600,10);
        pop();
        
    }
}