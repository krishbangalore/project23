//const World = Matter.World;
class Box {

constructor(x,y,width,height){
var box_options = {
    isStatic: true

}
  this.body = Bodies.rectangle(x,y,width,height,box_options);
  World.add(world,this.body);
  this.width=width;
  this.height=height;
}
display(){

    var pos=this.body.position;
    rectMode(CENTER);
    fill('red');
    rect(pos.x,pos.y,this.width,this.height); 

    }
}