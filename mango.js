class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("mango.png");
        this.body = Bodies.circle(this.x, this.y,(this.r)/3, options);
        World.add(world, this.body);
    }
    display(){
			
        var mpos=this.body.position;		

        push();
        translate(mpos.x, mpos.y);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
}
}