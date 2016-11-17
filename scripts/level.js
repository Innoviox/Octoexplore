function Level(levelPiece){
	this.width = levelPiece[0].length;
	this.height = levelPiece.length;
	this.tiles = new Array;
	var top_pix = -1;
	var left_pix = 0; //Distance from top left corner;
    this.levelPiece = levelPiece;
	startspot = [0, 0];
	for(x=0; x<this.height; x++){
		if (typeof(levelPiece[x]) !== "undefined") {
			for(y=0; y<levelPiece[x].length; y++){
				//console.log(levelPiece[x][y])
				if (levelPiece[x][y] == "@") {
					startspot = [x, y];
					break;
				}
			}
		}
	};
	for (x=0; x<this.width; x++){
		left_pix++;
		if (typeof(levelPiece[x]) !== "undefined") {
			for (y=0; y<levelPiece[x].length; y++){
					top_pix++;
					currPiece = levelPiece[left_pix]
					if (typeof(currPiece) != "undefined"){
					//console.log(currPiece, currPiece.length, currPiece[top_pix])
						//console.log([top_pix-1, left_pix], startspot)
						if ([top_pix-1, left_pix] != startspot){
							//console.log(currPiece[top_pix], " ", currPiece[top_pix] != " ")
							newTile = new Tile(top_pix, left_pix, currPiece[top_pix], currPiece[top_pix] != " ");
							this.tiles.push(newTile);
						} else {
							console.log("TICK")
							newTile = new Tile(top_pix, left_pix, currPiece[top_pix], true);
							
						}
					} else {break}
			};
			top_pix = -1;
		} else {break}
	}
	this.player = new Player(startspot, this.tiles, levelPiece);  
   // this.player.run();
}