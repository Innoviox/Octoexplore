var row, col, levelPiece;
gravTick = 0.1;
function Player(startspot, tiles, levelPieca){
	this.startspot = startspot;
	this.tiles = tiles;
	row = startspot[0];
	col = startspot[1];
	this.speedX = 0;
	this.speedY = 0;
	levelPiece = levelPieca;
	this.move = function(oldiv){
		//this.oldiv = oldiv
	   // window.alert(this)
		this.gravity()
		//window.alert(parseInt(oldiv.style.top + (this.speedX * pixels).toString() + "px"))
		//window.alert(parseInt(oldiv.style.left) + this.speedX * pixels)
        var [r, c] = this.getRow(oldiv);
        speedArray = this.touchSense(this.getTouching(r, c), this.speedX, this.speedY, r, c);
        this.speedX = speedArray[0];
        this.speedY = speedArray[1];
		oldiv.style.left = parseInt(oldiv.style.left) + this.speedX;
		oldiv.style.top = parseInt(oldiv.style.top) + this.speedY;
        
        
        //console.log(r);
        //console.log(c);
        //console.log(this.getTouching(row, col, this.tiles));
		//console.log(oldiv.style)
		//return true;
		//console.log(this)
		//this.moving = setTimeout(this.move(this.oldiv), 50);
		
	}
	/*this.getKeyPress = function(e){
		window.alert('Key Pressed!')
		if (e.keyCode == 37){
			this.speedX += 0.1; 
		} else if (e.keyCode == 39){
			this.speedX += 0.1;
		} else if (e.keyCode == 40){
			this.speedY += 0.1;
		} else if (e.keyCode == 38){
			this.speedY -= 0.1;
		}
	}
	*/
	this.gravity = function(){
        //window.alert("GRAVITATIONAL");
		this.speedX = this.speedX * 0.8;
        //this.speedY = this.speedY * 0.98 - (sign(this.speedY)+1) * 2
		this.speedY += gravTick;
        //gravTick -= 0.1;
	}
    
    
	this.setup = function(){
		this.oldiv = getDiv(this.startspot);
        row = startspot[1];
        col = startspot[0];
		console.log(col.toString() + "," + row.toString())
		console.log(this.oldiv, this.oldiv.style)
		this.oldiv.style.position = "absolute";
		this.oldiv.style.background = "black";
		this.oldiv.style.visibility = "visible";
		this.oldiv.style.height = 64;
		this.oldiv.style.width = 64;
	   // this.oldiv.style.top = 0;
		//this.oldiv.style.left = 0;
		return this.oldiv;
	}
	oldiv = this.setup();

}

Player.prototype.getTouching = function(row, column){
    //console.log(levelPiece[row-1])
    //r1 = levelPiece.length-row-2;
    //window.alert(levelPiece[r1]);//[column-1])
    //window.alert("Column" + column.toString())
    row = Math.trunc(row);
    column = Math.trunc(column)-1;
    if (column+1 >= levelPiece.length || column <= 0){
        //this.die();
        return ['','','',''];
    }
    
    if (row+1 >= levelPiece[column].length || row < 0){
        //this.die();
        return ['','','',''];        
    }
	tile_up    = levelPiece[column - 1][row];
	tile_down  = levelPiece[column + 1][row + 1];
	tile_left  = levelPiece[column    ][row];
	tile_right = levelPiece[column    ][row + 1];
	tileArr = [tile_up, tile_down, tile_left, tile_right];
	return tileArr;
}

Player.prototype.touchSense = function(touchArr, speedX, speedY, r, c){
    //console.log(tileArr)
    var t, n;
    if (speedX > 0){
        n = 3;
    } else if (speedX <= 0){
        n = 2;
    };
    
    if (typeof(n) !== undefined){
        t = solidTiles[tileDict[touchArr[n]]];
       //console.log(t);
        if (t == 1){
            speedX = 0;
        } else if (t == 2){
            this.die();
        } else if (t == 3){
            this.collect(r, c);
        };
    }
    //console.log(speedY);
    if (speedY <= 0){
        n = 0;
    } else if (speedY > 0){
        n = 1;
    };
    
    if (typeof(n) !== undefined){
        t = solidTiles[tileDict[touchArr[n]]];
        console.log(touchArr[n], n, t);
        if (t == 1){
            speedY = 0;
        } else if (t == 2){
            this.die();
        } else if (t == 3){
            this.collect(r, c);
        };
    }
  //  console.log(t);
    //console.log(speedY);
    return [speedX, speedY]
}

Player.prototype.getRow = function(div){
    r = parseInt(oldiv.style.left) / pixels;
    c = parseInt(oldiv.style.top) / pixels + 1;
    return [r, c];
}

Player.prototype.die = function(){
    window.alert('You died');
    row = startspot[1];
    col = startspot[0];
    this.setup();
}

Player.prototype.collect = function(r, c){
    window.alert("Coins: " + coins.toString());
    coins++;
}