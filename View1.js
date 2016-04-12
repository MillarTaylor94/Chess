//cript type="text/javascript" src="model.js"></script>

var View;
View = {
    previouschar: null,
	changer: true,
	clickcount:0,

	init: function () {
		console.log("View.Init Called, initializing View");

		//View.UpdateState();



		//XMList();
	},


	/*This Function is used to display your chess graphics within your gamegrid.*/
	/*Parent Fucntion:Generate */
	getImage: function (h, v) {

		/*To Square Function grabs the array index for single dimension*/

		var imageId = Model.gridModel[toSquare(h, v)];
//	console.log(imageId.name);
		if (imageId.name == "none") {
			return "";

		} else if (imageId.name == "pawn") {

			if (imageId.color == "black") {
				return "blkpawn.png";
			} else {
				return "whtpawn.png";
			}
		} else if (imageId.name == "knight") {

			if (imageId.color == "black") {
				return "blkknight.png";
			} else {
				return "whtknight.png ";
			}
		} else if (imageId.name == "bishop") {
			if (imageId.color == "black") {
				return "blkbishop.png ";
			} else {
				return "whtbishop.png ";
			}
		} else if (imageId.name == "king") {

			if (imageId.color == "black") {
				return "blkking.png ";
			} else {
				return "whtking.png ";
			}
		} else if (imageId.name == "queen") {

			if (imageId.color == "black") {
				return "blkqueen.png ";
			} else {
				return "whtqueen.png ";
			}
		} else if (imageId.name == "rook") {
			if (imageId.color == "black") {
				return "blkrook.png ";
			} else {
				return "whtrook.png ";
			}
		}
		else {

			return "";
		}

	},

	/*Functon Used to Generate Game Grid*/
	generate: function (width, height) {
		console.log("Started Generating Game grid.");
		var html = "";

		var gridcolor = true;
		var i = 0;
		var j = 0;
		var gridclass = "red";
		html += "<table id='tablediv'>"

		//for verticle ros
		for (j = 0; j < height; j++) {
			if (isEven(j)) {
				gridclass = "black";
			}
			else {
				gridclass = "red";
			}

			html += "<tr>"
			//html+="<td class=\""+ gridclass +"\"></td>";

			for (i = 0; i < width; i++) {


				//horizontally
				if (gridcolor == true) {
					gridclass = "red";
				}
				else if (gridcolor == false) {
					gridclass = "black";

				}
				//change color class

				gridcolor = change(gridcolor);
				if (View.getImage(i, j)) {
					html += "<td class=\"" + gridclass + "\"><img src=\"" + View.getImage(i, j) + "\" width=35px; height=35px;></td>";
				} else {
					html += "<td class=\"" + gridclass + "\"></td>";
				}
			}
			html += "</tr>";
			//change starting color of next row
			gridcolor = change(gridcolor);
		}

		html += "</table>";
		return html;

	},

    changePiece: function () {
		document.getElementById("lost").innerHTML = "0";
	},
	changePname: function () {
		if (View.changer == true) {
			View.changer = !View.changer;
			return document.getElementById("pname").innerHtml = Model.getName(1);
		}
		else if (View.changer == false) {
			View.changer = !View.changer;
			return document.getElementById("pname").innerHtml = Model.getName(2);

		} else {
			alert("bad changer value in changeplayer");
		}
	},

	//Function:getViewData
//Parameters:json array
//returns: none
//Updates view data for View and Model.
	getViewData:function(arr){
		console.log("called getViewData");
        //function is used to set up the game stats
		var player=document.getElementById("play").innerHTML=arr[0].Playerturn;
		var p1name=document.getElementById("p1name").innerHTML=arr[0].p1name;
		var p2name=document.getElementById("p2name").innerHTML=arr[0].p2name;
		var pturn=document.getElementById("turn").innerHTML=arr[0].currentturn;
		var lost=document.getElementById("lost").innerHTML=arr[0].pieceslost;
	
	},

	//Function:change turn
	//parameters: The players turn
//Updates view with whos turn it is
	changeTurn:function(turn){
	document.getElementById("play").innerHTML=turn;
	},
	resetter: function () {
 var char=document.getElementById("clickresult");//resets the character field on webpage
        char.innerHTML="";
		initialize();

		//alert("this Button is in progress but calls update game state and Model.reset");
	},
	updateClickResult:function(value){
		var char=document.getElementById("clickresult");//resets the character field on webpage
		char.innerHTML=value;
	},
	evaluateSquare:function(col,row){
       // console.log("evaluateSquare Called");
if(View.clickcount==Bool.False) {
var response=document.getElementById("clickresult");
    var reference=Model.gridref(col,row);

		if(reference.name=="none")
        {
            response.innerHTML="Empty Square";
            View.previouschar=null;
        }
    else{

            View.clickcount++;
            View.previouschar=reference;
            response.innerHTML=reference.color+ " " +reference.name;
           // View.clickcount++;
        }
	
}else if(View.clickcount==Bool.True){
var character=View.previouschar
  var secondClick=toSquare(col,row);
    initMove(character,secondClick);
    View.clickcount--;

}
		
	}
};

//-------------------------------------------------------------------------------------------












 
