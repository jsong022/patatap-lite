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
		//check if the circle should be deleted
    if(circles[i].area < 1){
    	//remove the Circle object smaller than 1
      circles[i].remove();
      //remove the now-deleted circle from the array
      circles.splice(i, 1);
      //decrement i so i++ at the end of for loop won't make it skip one 
      i--;
    }
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
			addCircle("rgb(128, 0, 50)");
			sounds[0].play();
			break;
		case 'b':
			addCircle("rgb(255, 120, 30)");
			sounds[1].play();
			break;
		case 'c':
			addCircle("rgb(48, 128, 0)");
			sounds[2].play();
			break;
		case 'd':
			addCircle("rgb(0, 225, 72)");
			sounds[3].play();
			break;
		case 'e':
			addCircle("rgb(50, 0, 128)");
			sounds[4].play();
			break;
		case 'f':
			addCircle("rgb(50, 88, 255)");
			sounds[5].play();
			break;
		case 'g':
			addCircle("rgb(255, 255, 0)");
			sounds[6].play();
			break;
		case 'h':
			addCircle("rgb(255, 0, 255)");
			sounds[7].play();
			break;
		case 'i':
			addCircle("rgb(0, 255, 255)");
			sounds[8].play();
			break;
		case 'j':
			addCircle("rgb(128, 91, 12)");
			sounds[9].play();
			break;
		case 'k':
			addCircle("rgb(71, 128, 43)");
			sounds[10].play();
			break;
		case 'l':
			addCircle("rgb(30, 50, 148)");
			sounds[11].play();
			break;
		case 'm':
			addCircle("rgb(78, 158, 30)");
			sounds[12].play();
			break;
		case 'n':
			addCircle("rgb(128, 75, 128)");
			sounds[13].play();
			break;
		case 'o':
			addCircle("rgb(18, 128, 128)");
			sounds[14].play();
			break;
		case 'p':
			addCircle("rgb(34, 221, 165)");
			sounds[15].play();
			break;
		case 'q':
			addCircle("rgb(176, 53, 202)");
			sounds[16].play();
			break;
		case 'r':
			addCircle("rgb(187, 151, 68)");
			sounds[17].play();
			break;
		case 's':
			addCircle("rgb(150, 180, 25)");
			sounds[18].play();
			break;
		case 't':
			addCircle("rgb(60, 60, 145)");
			sounds[19].play();
			break;
		case 'u':
			addCircle("rgb(190, 50, 75)");
			sounds[20].play();
			break;
		case 'v':
			addCircle("rgb(0, 90, 200)");
			sounds[21].play();
			break;
		case 'w':
			addCircle("rgb(49, 155, 107)");
			sounds[22].play();
			break;
		case 'x':
			addCircle("rgb(0, 15, 64)");
			sounds[23].play();
			break;
		case 'y':
			addCircle("rgb(128, 255, 128)");
			sounds[24].play();
			break;
		case 'z':
			addCircle("rgb(255, 128, 255)");
			sounds[25].play();
			break;
	}
}