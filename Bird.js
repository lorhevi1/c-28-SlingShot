class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);//to transfer all the properties from parent class constructer to child class constructer
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();//to refer to the parent class display function
  }
}