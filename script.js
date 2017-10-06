var canvas = document.getElementById("gfx");
var context = canvas.getContext("2d");

/* Image variables */
var logo = new Image;

Main();

function initGame()
{
	logo.src = "./logo.png";
}

function drawImage(image, x, y, width, height)
{
	context.drawImage(image,x,y,width,height);
}

function update()
{

}

function render()
{
	context.rect(20,20,150,100);
	context.stroke();
	drawImage(logo,180,80,128,128);
}

function Main()
{
	console.log("Running...");
	initGame();

	var mainloop = function()
	{
		update();
		render();
	};
	setInterval(mainloop,60);
	console.log("Test");
}

