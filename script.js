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
var leftarrow = new Image();
var rightarrow = new Image();
var field = new Image();
var circle = new Image();
var block = new Image();

var puck = {xpos:0,ypos:0,xvel:0,yvel:0};

var player1FrontTile = {xpos:0,ypos:0,direction:0};
var player1Blocks = [player1FrontTile];

var testMoveX = 0;
var testMoveY = 0;

var tmp = 0;
var t = 0;

Main();

function initGame()
{
	leftarrow.src = "./gfx/leftarrow.svg";
	rightarrow.src = "./gfx/rightarrow.svg";
	field.src = "./gfx/field.svg";
	circle.src = "./gfx/circle.svg";
	block.src = "./gfx/block.svg";
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


	var tilesX = (38/512)*canvas.width;
	var tilesY = (26/512)*canvas.height;

function render()
{
	var xx = 0;
	while (xx < canvas.width)
	{
		var yy = 0;
		while(yy < canvas.height)
		{
			drawImage(block,xx,yy,16,16);
			yy += 16;
		}
		xx += 16;
	}
	drawImage(field,0,0,canvas.width,canvas.height);
	//context.rect(20,20,150,100);
	//context.stroke();
	//drawImage(logo,testMoveX,testMoveY,128,128);
	/*var x = 0;
	var y = 0;
	while(x < canvas.width)
	{
		y = 0;
		while(y < canvas.height)
		{
			drawImage(leftarrow,x,y,tilesX,tilesY);
			drawImage(rightarrow,x,y,tilesX,tilesY);
			y += tilesY;
		}
		x += tilesX;
	}*/

	var x = canvas.width - (64/512)*canvas.width;
	var y = (42/512)*canvas.height;
	while(y < canvas.height)
	{
		drawImage(rightarrow,x + t,y,tilesX,tilesY);
		y += tilesY * 5;
	}

	var x = (32/512)*canvas.width;
	var y = (42/512)*canvas.height;
	while(y < canvas.height)
	{
		drawImage(leftarrow,x - t,y,tilesX,tilesY);
		y += tilesY * 5;
	}

	t = Math.sin(tmp);
	tmp++;
	drawImage(circle,canvas.width/2 - (82/512)*canvas.width,canvas.height/2-(82/512)*canvas.height,(164/512)*canvas.width,(164/512)*canvas.height);
}

function Main()
{
	console.log("Running...");
	initGame();

	var mainloop = function()
	{
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = 'black';
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = 'white';
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