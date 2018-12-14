let mic, recorder, soundFile;
let soundFiles = [];
let level;
let toilet, toilet3D;
let msg,msgs=[

];
let state = true;
let recBtn;
let playBtn;
let voiceOver;
let bgSound;

let waveStatic, waveMotion;
let vol, volHistory = [];

let box3D, lineGraph;

//generative design
let gif;
let recording = false;
let incr = 0;

function preload() {
  toilet3D = loadModel("Toilet-corrected.obj");
  voiceOver = loadSound("voiceOver2.mp3");
  bgSound = loadSound("audio/A_Quiet_Thought.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  //SOUNDS
  //using p5 sound lib. mic / sound source
  mic = new p5.AudioIn();
  mic.start();

  //using p5 sound lib. records the sound
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);

  //using p5 sound lib. playback
  soundFile = new p5.SoundFile();

  // using p5 speech library
  let lang = navigator.language || 'en-US'
  msg = new p5.SpeechRec('lang');
  msg.continuous = true;
  msg.start(); //start listening

  //draw visuals according to sounds??
  amp = new p5.Amplitude();
  amp.setInput(soundFile);

  //ACTIONS: select native = document.
  recBtn = document.getElementById('recBtn');
  recBtn.addEventListener('click', toggleRec);

  playBtn = document.getElementById('playBtn');
  playBtn.addEventListener('click', playRec);

  //VISUALS:
  waveMotion = new visualSineWave(5, 30, 1);
  lineGraph = new visualLineGraph(0, 0);
  toilet = new visualToilet3D(130, -45, 0, 0);
  box3D = new visualBox3D(20, 0, 0, sin(45), 0, 0);

  voiceOver.play();
  
  bgSound.play();
  bgSound.setVolume(0.3);
}

function draw() {
  background(235,188,202);

  //SOUND
  //get volume level
  // let vol = mic.getLevel();
  vol = mic.getLevel();

  let level = amp.getLevel();
  volHistory.push(level * 400);

  //LIGHT
  directionalLight(225, 10, 100, mouseX, mouseY, -500);
  pointLight(255, 10, 100, 0, 0, 300)

  //VISUAL
  if (state === true) { // NOT Recording
    // waveMotion.hide();
  } else {
    // push();
    box3D.show();
    box3D.updateVol(vol);
  }

  lineGraph.show();
  // toilet.update(incr);
  toilet.show();
  incr += 0.2;
}

//RECORD SOUND - on button pressed
function toggleRec() {
  if (state === true && mic.enabled) {
    recorder.record(soundFile);

    //if button is clicked.. do these things
    recBtn = document.getElementById('recBtn').innerHTML = "Stop Recording";
    recBtn = select('#recBtn');
    recBtn.style('background-color', '#cc0000');
    console.log('record on');
    voiceOver.stop();
    // toilet.remove();
    // text = select('#des');
    // text.remove();
    // bgSound.stop();
    state = false;

  } else {
    recorder.stop();
    recBtn = document.getElementById('recBtn').innerHTML = "Start Recording";
    recBtn = select('#recBtn');
    recBtn.style('background-color', '#fff');
    console.log('record stop');
    state = true;
    text = document.getElementById('des').innerHTML = "Listen to your sounds";
  
  }
}

//PLAY SOUND, VISUALIZE, SAVE??????
function playRec() {
  // if record has sound file... 
  // play sound, draw visualize
  // save sound
  // push 1 sound , push 1 cube
  soundFile.play();
  console.log('i will play a record');
  saveSound(soundFile, 'soundFiles' + '.wav');
}