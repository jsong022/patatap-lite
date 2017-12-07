//array for all the circles to go into
var circles = [];

//array for all the sounds
var sounds = [];

//maximum point of the current canvas size (i.e. Bottom Right corner)
var maxPt = new Point(view.size.width, view.size.height);

//load all the audio files to be used
//function definition found further down
loadSounds();

//on keyDown events
function onKeyDown(event) {
	alphabetEvent(event);
	console.log(event.key)
}

//on each frame of the animation
function onFrame(event){
	//for each circle on canvas
	for (var i = 0; i < circles.length; i++){
		//change color through a minor change to its hue
		circles[i].fillColor.hue += 1;
		//scale it down by 5%
		circles[i].scale(0.95);	
	}
}

//returns a random color in "rbg(x, y, z)" format
function randomColor(){
	var str = "rgb(";
	str += Math.floor(Math.random()*256) + ", ";
	str += Math.floor(Math.random()*256) + ", ";
	str += Math.floor(Math.random()*256) + ")";
	return str;
}

//loads all the audio files as new Howls into sounds[]
function loadSounds(){
	sounds.push(new Howl({ src: ['./sounds/bubbles.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/clay.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/confetti.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/corona.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/dotted-spiral.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/flash-1.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/flash-2.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/flash-3.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/glimmer.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/moon.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/pinwheel.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/piston-1.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/piston-2.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/piston-3.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/prism-1.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/prism-2.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/prism-3.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/splits.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/squiggle.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/strike.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/suspension.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/timer.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/ufo.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/veil.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/wipe.mp3'] }));
	sounds.push(new Howl({ src: ['./sounds/zig-zag.mp3'] }));
}

function addCircle(color){
	var newCircle = new Path.Circle(Point.random() * maxPt, 100); 
	newCircle.fillColor = color;
	circles.push(newCircle);
}

//adds a new circle to a random location
//and plays the sound based on event.key
//color of the circle is also based on event.key
function alphabetEvent(event){
	switch (event.key){
		case 'a':
			addCircle("rgb(0, 0, 0)");
			sounds[0].play();
			break;
		case 'b':
			addCircle("rgb(10, 10, 10)");
			sounds[1].play();
			break;
		case 'c':
			addCircle("rgb(20, 20, 20)");
			sounds[2].play();
			break;
		case 'd':
			addCircle("rgb(30, 30, 30)");
			sounds[3].play();
			break;
		case 'e':
			addCircle("rgb(40, 40, 40)");
			sounds[4].play();
			break;
		case 'f':
			addCircle("rgb(50, 50, 50)");
			sounds[5].play();
			break;
		case 'g':
			addCircle("rgb(60, 60, 60)");
			sounds[6].play();
			break;
		case 'h':
			addCircle("rgb(70, 70, 70)");
			sounds[7].play();
			break;
		case 'i':
			addCircle("rgb(80, 80, 80)");
			sounds[8].play();
			break;
		case 'j':
			addCircle("rgb(90, 90, 90)");
			sounds[9].play();
			break;
		case 'k':
			addCircle("rgb(100, 100, 100)");
			sounds[10].play();
			break;
		case 'l':
			addCircle("rgb(110, 110, 110)");
			sounds[11].play();
			break;
		case 'm':
			addCircle("rgb(120, 120, 120)");
			sounds[12].play();
			break;
		case 'n':
			addCircle("rgb(130, 130, 130)");
			sounds[13].play();
			break;
		case 'o':
			addCircle("rgb(140, 140, 140)");
			sounds[14].play();
			break;
		case 'p':
			addCircle("rgb(150, 150, 150)");
			sounds[15].play();
			break;
		case 'q':
			addCircle("rgb(160, 160, 160)");
			sounds[16].play();
			break;
		case 'r':
			addCircle("rgb(170, 170, 170)");
			sounds[17].play();
			break;
		case 's':
			addCircle("rgb(180, 180, 180)");
			sounds[18].play();
			break;
		case 't':
			addCircle("rgb(190, 190, 190)");
			sounds[19].play();
			break;
		case 'u':
			addCircle("rgb(200, 200, 200)");
			sounds[20].play();
			break;
		case 'v':
			addCircle("rgb(210, 210, 210)");
			sounds[21].play();
			break;
		case 'w':
			addCircle("rgb(220, 220, 220)");
			sounds[22].play();
			break;
		case 'x':
			addCircle("rgb(230, 230, 230)");
			sounds[23].play();
			break;
		case 'y':
			addCircle("rgb(240, 240, 240)");
			sounds[24].play();
			break;
		case 'z':
			addCircle("rgb(250, 250, 250)");
			sounds[25].play();
			break;
	}
}