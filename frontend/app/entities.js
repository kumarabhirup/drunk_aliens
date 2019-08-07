
/*
    Base entity class, can be used as a base for other drawable objects, used for drawing and checking basic collisions

    IMPORTANT: Make sure to assign it an img variable after instantiating

    Common way to use it:

    let myObject;
    ...
    myObject = new Entity(x, y);
    myObject.img = myImage;

    ...

    draw(){
        ...

        myObject.render();
    }

    If you want to check for collisions with another Entity:

    if(myObject.collisionWith(anotherObject)){
        //do stuff
    }
    
*/
class Entity {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.rotation = 0;
        this.img; //Assign this after instantiating
        this.sizeMod = 1; //Size multiplier on top of objSize
        this.removable = false;
        this.scale = createVector(1, 1);
    }


    render() {
        let size = objSize * this.sizeMod;

        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.rotation);
        scale(this.scale.x, this.scale.y);
        image(this.img, -size / 2, -size / 2, size, size);
        pop();
    }

    //Basic circle collision
    collisionWith(other) {
        let distCheck = (objSize * this.sizeMod + objSize * other.sizeMod) / 2;

        if (dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y) <= distCheck) {
            return true;
        } else {
            return false;
        }
    }

     checkClick(){
        return (mouseX > this.pos.x - this.sizeMod * objSize / 2
        && mouseX < this.pos.x + this.sizeMod * objSize /2
        && mouseY > this.pos.y - this.sizeMod * objSize / 2
        && mouseY < this.pos.y + this.sizeMod * objSize /2);
    }

}

//EXAMPLE
class Node {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.sizeMod = random(0.06, 0.1);
        this.velocity = createVector(0, 0);
        this.maxSpeed = 0.0002 * objSize;
        this.velocityChangeTimer = random(3, 5);
        this.drawLine = false;
        this.mouseDist = 0;
        this.maxDist = objSize * 8;
    }

    update() {
        this.velocityChangeTimer -= 1 / frameRate();
        this.maxDist = objSize * 7;
        if (this.velocityChangeTimer <= 0) {
            this.velocityChangeTimer = random(3, 5);
            this.changeVelocity();
        }

        this.pos.add(this.velocity);
        this.mouseDist = dist(this.pos.x, this.pos.y, mouseX, mouseY);
    }

    changeVelocity() {
        this.velocity = createVector(random(-this.maxSpeed, this.maxSpeed) * objSize, random(-this.maxSpeed, this.maxSpeed) * objSize);
    }

    render() {
        let distanceFactor = (1 - (this.mouseDist / this.maxDist));

        //Draw line towards cursor with opacity depending on distance to cursor
        if (this.mouseDist <= this.maxDist) {
            push();
            strokeWeight(objSize * 0.05);
            strokeCap(ROUND);
            let lineColor = color(10, 113, 174, distanceFactor * 200);
            stroke(lineColor);
            line(this.pos.x, this.pos.y, mouseX, mouseY);
            pop();
        }

        //Draw circle with size and opacity depending on distance to cursor
        push();
        let size = objSize * this.sizeMod * (distanceFactor + 1);
        let ballColor = color(10, 113, 174, distanceFactor * 155 + 255);
        fill(ballColor);
        circle(this.pos.x, this.pos.y, size);
        pop();
    }
}
//===

class BaseObject extends Entity {
    constructor(x,y, type){
        super(x,y);

        this.type = type;

        this.img = imgDraggable[type];
       
        this.sizeMod = 3;

    }
}

class Draggable extends Entity{
    constructor(x, y, type){
        super(x, y);

        this.img = imgDraggable[type];
        this.defaultSize = 2;
        this.goalSize = this.defaultSize;
        this.sizeMod = 0.1;

        this.goalVelocity = createVector(0, 0);
        this.velocity = createVector(0, 0);

        this.moveSpeed = 1;
        this.moveTimer = 2;
        this.collided = false;

    }

    update(){
        
        if(this.collided){
            this.sizeMod = Smooth(this.sizeMod, this.goalSize, 2);

            if(this.sizeMod < 0.1){
                this.removable = true;
                // losingLife = true;
            }
        }else{
            this.sizeMod = Smooth(this.sizeMod, this.goalSize, 4);
        }
        

        //this.pos.x += this.velocity.x;
        //this.pos.y += this.velocity.y;

        this.moveTimer -= 1 / frameRate();

        if(this.moveTimer <= 0){
            this.goalVelocity.x = random(-this.moveSpeed, this.moveSpeed);
            this.goalVelocity.y = random(-this.moveSpeed, this.moveSpeed);

            this.moveTimer = 2;
        }

        this.velocity.x = Smooth(this.velocity.x, this.goalVelocity.x, 8);
        this.velocity.y = Smooth(this.velocity.y, this.goalVelocity.y, 8);

        

        this.pos.add(this.velocity);

        if(this.checkEdges()){
            this.removable = true;
            loseLife();
        }

    }

    checkEdges(){
        return (this.pos.x > width + objSize * 2
            || this.pos.x <  -objSize * 2
            || this.pos.y > height  + objSize * 2
            || this.pos.y < -objSize * 2);
    }

    
}