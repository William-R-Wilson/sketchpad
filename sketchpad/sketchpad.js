



function createGrid(resolution) {
	var wr = document.createElement("div");
	wr.setAttribute("id", "wrapper");
	document.body.appendChild(wr);
	for (x = 0; x<resolution; x++)
	{
		for (i = 0; i<resolution; i++)
			{
				var pix = document.createElement("div");
				pix.setAttribute("class", "pixel");	
				$(pix).hover(function(){   
           			$(this).css("background-color","gray");
        			}, function(){
           			$(this).css("background-color", "black");
        		});
				

				//is this where I would enter the height and width?
				wr.appendChild(pix);
				
				
			};
		var clr = document.createElement("div");
		clr.setAttribute("class", "clearLeft");	
		wr.appendChild(clr);
	};
};





//function draw(){
//	x.style.backgroundColor = "black";
//};



function getRes(){
	var resolution = prompt("Enter your desired grid resolution.  Number must be between 3 and 64");
	if (resolution > 64  || resolution < 3)
		{
			alert("This number is beyond the acceptable range.  Pick a number between 3 and 64")
			getRes();
		}	
	createGrid(resolution);
	//would like to add auto-calculate height and width of pixel
};

//Console is not showing any errors but hover is not working
//after I added the script below
/*$(document).ready(function(){	
	$(".pixel").hover(function(){	
  		$(this).css("background-color","black");
  		}, function(){
  		$(this).css("background-color", "black");
  		});
});*/	
