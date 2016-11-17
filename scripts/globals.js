var sX = 0;
var pixels = 64;
var startspot;
var speedX=0;
var speedY=0;
var coins = 0;
console.log(screen.availWidth, screen.availWidth/pixels)
console.log(screen.availHeight, screen.availHeight/pixels)

var top_pix, left_pix, top_pix2, left_pix2;

var levelPieces = {
  "level1":["                    ",
			"                    ",
			"                    ",
			"x                x  ",
			"y         o o    y  ",
			"y @      xxxxx   y  ",
			"yxxxx            y  ",
			"    y!!!!!!!!!!!!y  ",
			"    yyyyyyyyyyyyyy  "]}
/*x: standard tile: top
  y: standard tile: middle
  @: starting place
  =: Flying enemy
  !: lava
  o: coin
   : empty*/

var solidTiles = [1,1,0,2,2,3,0];
//1: solid, 0: not solid, 2: death, 3: collectable

var tileDict = {
    "x" : 0,
    "y" : 1,
    "@" : 2,
    "=" : 3,
    "!" : 4,
    "o" : 5,
    " " : 6
}
/*Indices correspond with solidTiles; usage: solidTiles[tileDict[*tile]] returning soldidity
                                             _.findKey(tileDict, *tile)  return tile type from tile number
*/

function getDiv(place){
	return document.getElementById(place[1].toString()+","+place[0].toString())
}

function sign(num){
	if (num == 0) {
		return 0;
	} else if (num < 0) {
		return -1;
	} else {
		return 1;
	};
}

function solid(tile){
    return solidTiles[tileDict[tile]]
}

function type(tileNum){
    return _.findKey(tileDict, tileNum)
}

