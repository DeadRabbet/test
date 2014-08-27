//Item variables
var money = 0;
var dirt = 0;
var gravel = 0;
var stone = 0;
var granite = 0;
//Timer
var Timer = window.setInterval(function(){Tick();},1000);

//Save and Load
function save() {
	var save = {
		money: money,
		dirt: dirt,
		gravel: gravel,
		stone: stone,
		granite: granite
	}
	localStorage.setItem("save",JSON.stringify(save));
}
function load() {
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.money !== "undefined") money = savegame.money;
	if (typeof savegame.dirt !== "undefined") dirt = savegame.dirt;
	if (typeof savegame.gravel !== "undefined") gravel = savegame.gravel;
	if (typeof savegame.stone !== "undefined") stone = savegame.stone;
	if (typeof savegame.granite !== "undefined") granite = savegame.granite;
	update();
}
function reset() {
	localStorage.removeItem("save");
	window.location.reload();
}
//Mining Functions
function mineDirt() {
	dirt += 1000000;
	update();
}
function mineGravel() {
	gravel += 1000000;
	update();
}
function mineStone() {
	stone += 1000000;
	update();
}
function mineGranite() {
	granite += 1000000;
	update();
}

//Selling Functions
function sellDirt() {
	money += dirt*0.5;
	dirt = 0;
	update();
}
function sellGravel() {
	money += gravel*1;
	gravel = 0;
	update();
}
function sellStone() {
	money += stone*3;
	stone = 0;
	update();
}
function sellGranite() {
	money += granite*5;
	granite = 0;
	update();
}

//Menu Functions
function menuMines() {
	document.getElementById("market").className = "hidden";
	document.getElementById("mines").className = "visible";
}
function menuMarket() {
	document.getElementById("mines").className = "hidden";
	document.getElementById("market").className = "visible";
	
}
function menuStats() {
	document.getElementById("settings").className = "hidden";
	document.getElementById("stats").className = "visible";
}
function menuSettings() {
	document.getElementById("stats").className = "hidden";
	document.getElementById("settings").className = "visible";
}

//Useful Functions
function Tick() {
	update();
}
function update() {
	document.getElementById("money").innerHTML = AddSeparators(money,",");
	document.getElementById("dirt").innerHTML = AddSeparators(dirt,",");
	document.getElementById("stone").innerHTML = AddSeparators(stone,",");
	document.getElementById("gravel").innerHTML = AddSeparators(gravel,",");
	document.getElementById("granite").innerHTML = AddSeparators(granite,",");
}
function AddSeparators(input,separator) { //Add separators to large numbers, returns a string
	var Before = String(input); //Turn the input into a string
	var SplitBefore = Before.split("."); //Split the input by "." to get the decimal
	var After = ""; //Reset the result
	var LastThree = ""; //Reset the last 3 characters
 
	while (SplitBefore[0].length > 0) { //While the left half of the number is still there
		LastThree = SplitBefore[0].slice(-3); //Take the last 3
		SplitBefore[0] = SplitBefore[0].slice(0,-3); //Remove the last 3
		if (After.length == 0) { After = LastThree; } else { After = LastThree + separator + After; } //Append the last 3
	}

	return After; //Return the number as a string
}
