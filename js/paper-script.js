// Create a Paper.js Path to draw a line into it:
var path = new Path();
// Give the stroke a color
path.strokeColor = 'red';
var start = new Point(300, 500);
// Move to start and draw a line from there
path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
path.lineTo(start + [ 600, -300 ]);

//add a new circle
var myCircle = new Path.Circle(new Point(150, 150), 100);
myCircle.fillColor = 'rgb(23, 150, 212)';