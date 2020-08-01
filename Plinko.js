class Plinko {
    constructor(x,y,radius){
    var options = {
        isStatic:true
    }
    
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = this.radius;
    World.add(world,this.body);
} 
display(){
    var pos = this.body.position;
    fill("white")
    ellipse(pos.x,pos.y,this.radius,this.radius);
    
}
};
