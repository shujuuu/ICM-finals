//visual 2
//When playing - DRAW VISUALS - no class
//by Shiffman - WORKING
class visualLineGraph {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    push();
    noFill();
    beginShape();
    translate(-width / 2, -height / 2);
    // console.log(volHistory);
    for (let i = 0; i < volHistory.length; i++) {
      let yTall = map(volHistory[i], 0, 1, height / 2, 0);
      vertex(i, yTall);

      if (volHistory.length > width) {
        volHistory.splice(0, 1);
      }
    }
    endShape();
    pop();
  }
}