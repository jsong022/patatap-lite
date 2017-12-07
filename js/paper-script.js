//array for all the circles to go into
var circles = [];

//maximum point of the current canvas size (i.e. Bottom Right corner)
var maxPt = new Point(view.size.width, view.size.height);

//on keyDown events
function onKeyDown(event) {

	// When a key is pressed, create a random color:
	var newCircle = new Path.Circle(Point.random() * maxPt, 100); 
	newCircle.fillColor = randomColor();
	circles.push(newCircle);
	new Howl({ src: ['./sounds/bubbles.mp3'] }).play();
};

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