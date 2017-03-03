var dvd = document.getElementById("dvd");
var circle = document.getElementById("circle");
var but = document.getElementById("stop");
var svg = document.getElementById("svg");
var ctr = 0;

var growth = 1;
var r = 0;
var velX = 1;
var velY = 1;
var posX = 250;
var posY = 250;

var dot = function() {

    window.cancelAnimationFrame(ctr);
    
    var grow = function() {

	clear();

	r += growth;

	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("fill", "red");
	circle.setAttribute("cx", 250);
	circle.setAttribute("cy", 250);
	circle.setAttribute("r", r);
	svg.appendChild(circle);

	if (r >= 250) {
	    growth = -growth;
	}
	if (r <= 0) {
	    growth = -growth;
	}

	ctr = window.requestAnimationFrame( dot );

    };
	
    grow();

};

var wasteTim = function() {

    window.cancelAnimationFrame(ctr);

    var waste = function() {

	clear();

	var dvd = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	dvd.setAttribute("fill", "red");
	dvd.setAttribute("x", posX);
	dvd.setAttribute("y", posY);
	dvd.setAttribute("height", 20);
	dvd.setAttribute("width", 50);
	svg.appendChild(dvd);

	posX += velX;
	posY += velY;

	if (posX + 50 >= 500) {
	    velX = -velX;
	}
	if (posX <= 0) {
	    velX = -velX;
	}
	if (posY <= 0) {
	    velY = -velY;
	}
	if (posY + 20 >= 500) {
	    velY = -velY;
	}

	ctr = window.requestAnimationFrame( wasteTim );

    };

    waste();
}

var clear = function() {
    while (svg.lastChild) {
	svg.removeChild(svg.lastChild);
    }
};

var stop = function() {
    r = 0;
    growth = 1;
    growth = 1;
    r = 0;
    velX = 1;
    velY = 1;
    posX = 250;
    posY = 250;
    
    window.cancelAnimationFrame(ctr);
}

circle.addEventListener("click", dot);

but.addEventListener("click", stop);

dvd.addEventListener("click", wasteTim);