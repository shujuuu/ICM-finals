//visualToilet3D
class visualToilet3D {
  constructor(size, rotX, rotY, rotZ) {
    this.size = size;
    this.rotX = rotX;
    this.rotY = rotY;
    this.rotZ = rotZ;
    this.incr = 0;
  }
  show() {
    push();
    scale(this.size);
    rotateX(this.rotX);
    rotateY(incr*0.03);
    noStroke();
    specularMaterial(225, 188, 202);
    model(toilet3D);
    pop();
  }
  update(incr) {
    this.incr = incr;
  }
  
}