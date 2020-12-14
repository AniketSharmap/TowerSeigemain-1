class Polygon {
  constructor(x, y, width, height) 
  {
      var options =
      {
          isStatic: false,
          stiffnes :0.8
      }
      this.polygon = Bodies.rectangle(x, y, width, height, options)
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = loadImage("sketch/polygon.png");
      World.add(world,this.polygon);

  }
display()
{
  var pos = this.polygon.position;
  imageMode(CENTER);
  image(this.image, 0,0, this.width, this.height);
}
};