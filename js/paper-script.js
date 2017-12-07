//array for all the circles to go into
var circles = [];

//array for all the sounds
var sounds = [];

//maximum point of the current canvas size (i.e. Bottom Right corner)
var maxPt = new Point(view.size.width, view.size.height);

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

//on keyDown events
function onKeyDown(event) {

	// When a key is pressed, create a random color:
	var newCircle = new Path.Circle(Point.random() * maxPt, 100); 
	newCircle.fillColor = randomColor();
	circles.push(newCircle);
	sounds[0].play();
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

function randomColor(){
	var str = "rgb(";
	str += Math.floor(Math.random()*256) + ", ";
	str += Math.floor(Math.random()*256) + ", ";
	str += Math.floor(Math.random()*256) + ")";
	return str;
}