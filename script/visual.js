//transforming sound to visuals
// class visual {
//   constructor(x, y, r) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//   }
//     show() {
//       noFill();
//       beginShape();
//       angleMode(DEGREES);
//       translate(width / 2, height / 2);
//       for (let i = 0; i < 360; i++) { //i = angle
//         this.r = map(volHistory[i], 0, 1, 100, 200);
//         this.x = this.r * cos(i);
//         this.y = this.r * sin(i);

//         vertex(this.x, this.y);

//         if (volHistory.length > 360) {
//           volHistory.splice(0, 1);
//         }
//       }
//       endShape();
//     }
// }