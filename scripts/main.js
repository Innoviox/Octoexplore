level = new Level(levelPieces['level1']); 
console.log(level.tiles); 
id = level.player.startspot[1].toString()+","+level.player.startspot[0].toString();
//console.log(id)
//window.alert(getDiv([6,2]))
//jQuery bind player motion
function test_key(selkey){
    var alias = {
        "left":37,
        "up":38,
        "right":39,
        "down":40
    };

    return key[selkey] || key[alias[selkey]];
}

function test_keys(){
    var keylist = arguments;

    for(var i = 0; i < keylist.length; i++)
        if(!test_key(keylist[i]))
            return false;

    return true;
}

var keys = [];
//document.body.innerHTML = "Keys currently pressed: "
window.addEventListener("keydown",
    function(e){
        keys[e.keyCode] = e.keyCode;
        var keysArray = getNumberArray(keys);
        check(keysArray);
    },
false);

window.addEventListener('keyup',
    function(e){
        keys[e.keyCode] = false;
       // document.body.innerHTML = "Keys currently pressed: " + getNumberArray(keys);
    },
false);

function getNumberArray(arr){
    var newArr = new Array();
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] == "number"){
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}

function check(ka){
    if (37 in ka){
        level.player.speedX -= 8; 
        if (38 in ka){
            level.player.speedY -= 5;
        }
    }
    
    if (39 in ka){
        level.player.speedX += 8;
        if (38 in ka){
            level.player.speedY -= 5;
        }
    }
    
   else if (38 in ka){
        level.player.speedY -= 5;
    }
}
$(document).bind('keydown', function(e){
		if (e.keyCode == 37){
			level.player.speedX -= 8; 
            console.log('left');
		};
        if (e.keyCode == 39){
			level.player.speedX += 8;
            console.log('right');
		};
        if (e.keyCode == 40){
			level.player.speedY += 5;
            console.log(level.player.speedY);
		};
        if (e.keyCode == 38){
			level.player.speedY -= 5;
            console.log(level.player.speedY);
		}
	level.player.move(getDiv(level.player.startspot));
});
/*var map = {}; // You could also use an array
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
		if (map[37]){
			level.player.speedX -= 8; 
            console.log('left');
		} else if (map[39]){
			level.player.speedX += 8;
            console.log('right');
		} else if (map[40]){
			level.player.speedY += 5;
            console.log(level.player.speedY);
		} else if (map[39]){
			level.player.speedY -= 5;
            console.log(level.player.speedY);
		}
}*/
Player.prototype.run = function(){
		console.log(document.getElementById(startspot[1].toString()+","+startspot[0].toString()))
		level.player.oldiv = getDiv(this.startspot);
		level.player.setup()
	   // this.moving = 
};
level.player.run()
//window.alert("HI")
//console.log(solidTiles[tileDict[touchArr[0]]].toString());
//console.log(solid(0).toString());
var moving = setInterval("level.player.move(level.player.oldiv)", 1);
