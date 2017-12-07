//maximum point of the current canvas size (i.e. Bottom Right corner)
var maxPt = new Point(view.size.width, view.size.height);

//on keyDown events
function onKeyDown(event) {
	//create a new circle:
	Path.Circle(Point.random() * maxPt, 50).fillColor = randomColor();
};

function randomColor(){
	var str = "rgb(";
	str += Math.floor(Math.random()*256) + ", ";
	str += Math.floor(Math.random()*256) + ", ";
	str += Math.floor(Math.random()*256) + ")";
	return str;
}