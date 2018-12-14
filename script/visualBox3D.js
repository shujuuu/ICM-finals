//Visual 3D - by Jim - NOT WORKING
class visualBox3D {
  constructor(cubeWidth, cubeHeight, temp, rotX, rotY, rotZ) {
    this.cubeWidth = random(10, 50);
    this.cubeHeight = random(10, 50);
    this.temp += 0.005;
    this.vol = 0;

    this.rotX = rotX;
    this.rotY = rotY;
    this.rotZ = rotZ;
  }
  show() {
    push();
    // let colR = (this.vol*100);
    // let colG = (this.vol*1);
    // let colB = (this.vol*5);
    
    ambientMaterial(200, 10, 100);
    rotateX(this.rotX);
    rotateY(this.rotY);
    rotateZ(this.rotZ);
    rotateY(0.01 * frameCount);

    noStroke();
    push();
    translate(150, 0, 150);
    box(this.cubeWidth * this.vol*100);
    pop();

    push();
    translate(-150, 0, 150);
    box(this.cubeWidth * this.vol*100);
    pop();

    push();
    translate(150, 0, -150);
    box(this.cubeWidth * this.vol*100);
    pop();

    push();
    translate(-150, 0, -150);
    box(this.cubeWidth * this.vol*100);
    pop();

    pop();
  }
  updateVol(vol) {
    this.vol = vol;
  }
}