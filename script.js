var canvas = document.getElementById("gfx");
var context = canvas.getContext("2d");

Main();

function Main()
{
	context.rect(20,20,150,100);
	context.stroke();

	console.log("Test");
}