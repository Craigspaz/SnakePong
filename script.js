var canvas = document.getElementById("gfx");
var context = canvas.getContext("2d");

/* Image variables */
var logo = new Image;

var testMoveX = 0;

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
	testMoveX++;
}

function render()
{
	context.rect(20,20,150,100);
	context.stroke();
	drawImage(logo,testMoveX,80,128,128);
}

function Main()
{
	console.log("Running...");
	initGame();

	var mainloop = function()
	{
		context.clearRect(0, 0, canvas.width, canvas.height);
		update();
		render();
	};
	setInterval(mainloop,60);
	console.log("Test");
}

