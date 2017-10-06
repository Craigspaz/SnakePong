var canvas = document.getElementById("gfx");
var context = canvas.getContext("2d");

document.addEventListener("keydown", keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

/* keyboard keys */

var wKey = false;
var aKey = false;
var sKey = false;
var dKey = false;

/* Image variables */
var logo = new Image();

var testMoveX = 0;
var testMoveY = 0;

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
	//testMoveX++;
	if(wKey == true)
	{
		testMoveY--;
	}
	if(sKey == true)
	{
		testMoveY++;
	}
	if(aKey == true)
	{
		testMoveX--;
	}
	if(dKey == true)
	{
		testMoveX++;
	}
}

function render()
{
	context.rect(20,20,150,100);
	context.stroke();
	drawImage(logo,testMoveX,testMoveY,128,128);
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

function keyDownHandler(event)
{
	var key = String.fromCharCode(event.keyCode);

	if(key == "W")
	{
		wKey = true;
	}
	else if(key == "A")
	{
		aKey = true;
	}
	else if(key == "S")
	{
		sKey = true;
	}
	else if(key == "D")
	{
		dKey = true;
	}
}

function keyUpHandler(event)
{
	var key = String.fromCharCode(event.keyCode);

	if(key == "W")
	{
		wKey = false;
	}
	else if(key == "A")
	{
		aKey = false;
	}
	else if(key == "S")
	{
		sKey = false;
	}
	else if(key == "D")
	{
		dKey = false;
	}
}