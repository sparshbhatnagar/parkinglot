canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

widthcar = 100;
heightcar = 90;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carx = 10;
cary = 10;

function add() {
	imagetagbg = new Image(); 
    imagetagbg.onload = uploadBackground; 
    imagetagbg.src = background_image; 

    greencar_image = new Image();
    greencar_image.onload = uploadgreencar;
    greencar_image.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(imagetagbg , 0,0 , canvas.width , canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_image ,carx , cary , widthcar , heightcar);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (cary >= 0) {
        cary = cary - 25 ; 
        console.log("when up arrow is pressed , x =  " + carx + " and y = " + cary);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	
	if (cary  <= 600) {
        cary = cary + 25 ; 
        console.log("when up arrow is pressed , x =  " + carx + " and y = " + cary);
        uploadBackground();
        uploadgreencar();
	}
}

function left()
{
	
	if (carx  >= 0) {
        carx = carx - 25 ; 
        console.log("when up arrow is pressed , x =  " + carx + " and y = " + cary);
        uploadBackground();
        uploadgreencar();
	}
}

function right()
{
	if (carx <= 700) {
        carx = carx + 25 ; 
        console.log("when right arrow is pressed , x =  " + rvx + " and y = " + rvy);
        uploadBackground();
        uploadgreencar(); 
	}
}
