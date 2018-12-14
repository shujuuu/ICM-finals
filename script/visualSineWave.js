//when speaking graphics, sine wave NOT WORKING
// let dia = 5;
// let ypoint = 0;
// let amplitude = 10;
// let timePeriod = 100;
// let angleVelocity = 6.28 / timeperiod;
// let time = 0;
// let numofparticles;

//when playing - visualize level
class visualSineWave {
  constructor(dia, amplitude, time) {
    this.dia = dia;
    // this.ypoint = ypoint;
    this.amplitude = amplitude;
    // this.timePeriod = timePeriod;
    this.angleVelocity = 6.28;
    this.time = time;
    this.vol = 0;
  }
  show() {
    push();
    translate(-width / 2, -height / 2);
    noStroke();
    fill(255, 0, 0);
    angleMode(RADIANS);
    for (let i = 0; i < width; i += 5) {
      this.y = sin(radians(i + frameCount) * this.time) * this.amplitude * this.vol * 100;
      ellipse(i, height / 2 + this.y, this.dia, this.dia);
    }
    pop();
  }
  updateVol(vol) {
    this.vol = vol;
  }
}