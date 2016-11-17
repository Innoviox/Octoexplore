function Tile(top_pix, left_pix, costume, mustShow){
	this.top_pix = top_pix;
	this.left_pix = left_pix;
	this.costume = costume;
	
	this.convertCostume = function(){
		if (this.costume=="x"){
			return "wall";
		} else if (this.costume == "y"){
			return "wallCenter";
		} else if (this.costume=="!" || this.costume=="="){
			return "lava";
		} else if (this.costume=="o") {
			return "coin_1";
		} else {
			return "invisible"; //includes " " and "@"; should "@" be green?
		}
	}
	this.getImage = function(){
		if (this.convertCostume() != "invisible"){
			c = this.convertCostume();
			return "images/" + c+".png";
		}
	}
	this.styles={
		"lava": "background: rgb(255, 100, 100);height: 64px;width: 64px",
		"wall": " background: blue;height: 64px;width: 64px",
		"coin": "background: white;height: 64px;width: 64px",//"background: yellow; border-radius:100%;height: 30px;width: 30px;padding: 12px 12px 12px 12px", //padding:25%",
		"invisible":"background: white;height: 64px;width: 64px"
	}
	if ([this.top_pix-1, this.left_pix] != startspot) {
		if (mustShow && this.convertCostume() == "invisible") {
			document.write("<div class="+this.convertCostume()+" id=" + this.top_pix.toString() + "," + this.left_pix.toString()+"  style='position:absolute; top:" + this.left_pix*pixels + "px;left:" + this.top_pix*pixels + "px;" + this.styles[this.convertCostume()] + "'></div>");
			this.exists = false
		} else if (mustShow || this.convertCostume() != "invisible") {
			document.write("<div class="+this.convertCostume()+" id=" + this.top_pix.toString() + "," + this.left_pix.toString()+"  style='position:absolute;background:green; top:" + this.left_pix*pixels + "px;left:" + this.top_pix*pixels + "px;" + this.styles[this.convertCostume()] + "'><image src=" + this.getImage() + "></div>");
			this.exists = true
		}
	}
	this.setPlace = function(){
		if (this.exists){
			var testLeft = sX + this.left_pix * pixels;
			var div = document.getElementById(this.top_pix.toString() + "," + this.left_pix.toString());
			//console.log(this.left_pix, testLeft)
			if (testLeft > 0 || testLeft < screen.availWidth){
				div.style.display = "initial"
				div.style.left = this.top_pix * pixels;
				div.style.top = testLeft;
			} else {
				div.style.display = "none";
				}
		}
	}

	this.setPlace()
}
