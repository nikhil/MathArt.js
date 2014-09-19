function getSine()
{

var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

//clears the canvas
ctx.save();

ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.restore();




var x =0;

ctx.beginPath();

while( x<400)
{   if(Math.floor(x)%12 ==0)
    {
          amp =  Math.floor(Math.random() * 75)+.01;
        width = Math.floor(Math.random() * 1.5)+.01;
		wavelength =  Math.floor(Math.random() * 1.57);

    }    
        
    
    var y=amp*Math.sin(width*x+wavelength)+ 80;
    ctx.lineTo(y,x);
     x=x+.05;
}

var gradient=ctx.createLinearGradient(0,0,0,300);
var color1 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
gradient.addColorStop("0",color1);
var color2 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
gradient.addColorStop(".25",color2);
var color3 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
var color4 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
gradient.addColorStop(".5",color3);
gradient.addColorStop("1.0",color4);

// Fill with gradient
ctx.strokeStyle=gradient;
ctx.lineWidth=2.4;

ctx.stroke();
//$('.post .sin').css('top','80px');
//$('.post #sinbtn').css('top','520px');

}

getSine();

