//<script type="text/javascript" src="model.js"></script>

	//Function:addHandlers
//Parameters:
//returns: \
//Purpose add clickhandlers to game grid.
function addHandlers(){
console.log("calling AddHandlers Function");
	var tablediv=document.getElementById("grid");
var cells=tablediv.getElementsByTagName("td");

	for(var i=0;i<cells.length;i++){
cells[i].onclick=clickgrid;
	}
}
function clickgrid(){
	var click=document.getElementById("tablediv");
	var col=this.cellIndex;
	var row=this.parentNode.rowIndex;
    console.log("row = "+ row +"col= "+ col);
	var cell=click.rows[row].cells[col];
	cell.style.backgroundColor="blue";
    var message = document.getElementById("clicklocation");
    message.innerHTML="You Clicked at grid element Row: "+ row.toString()+" Column: "+col.toString();
}

/*Boolean ValueChanger
Used in Generate*/
change=function(value){
	if(value==false)
	{ value=true;}
else 
{ value=false;}

	return value;
};
/*Is Even
Used to evaluate if value is even or odd, Used in Generate*/
	isEven=function(value){
    if (value%2 == 0)
        return true;
    else
        return false;
};


var View;
View = {
	changer: true,


	init: function () {
		console.log("View.Init Called, initializing View");

		Model.init();
		var gridiv = document.getElementById("grid");
		gridiv.innerHTML = View.generate(8, 8);
		animate();
		View.UpdateState();

		addHandlers();

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
					html += "<td class=\"" + gridclass + "\"><img src=\"" + View.getImage(i, j) + "\" width=30px; height=35px;></td>";
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
	changePlayer: function () {
		console.log("changePlayer");
		return document.getElementById("play").innerHTML = Model.getPlayer();

	},

	changeturn: function () {

		return document.getElementById("turn").innerHTML = "0";


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
	UpdateState: function () {
		//View.changePlayer();
		//View.changePiece();
	//	View.changeturn();
		//View.changePname();
	},
	getViewData:function(arr){
		console.log("called getViewData");
		var player=document.getElementById("play").innerHTML=arr[0].Playerturn;
		var p1name=document.getElementById("p1name").innerHTML=arr[0].p1name;
		var p2name=document.getElementById("p2name").innerHTML=arr[0].p2name;
		var pturn=document.getElementById("turn").innerHTML=arr[0].currentturn;
		var lost=document.getElementById("lost").innerHTML=arr[0].pieceslost;
		player=arr[0].Playerturn;
		player=arr[0].Playerturn;
		p1name="arr[0].p1name";
		p2name=arr[0].p2name;
		lost=arr[0].pieceslost;
		pturn=arr[0].currentturn;



	},
	resetter: function () {
//
		View.init();
		//alert("this Button is in progress but calls update game state and Model.reset");
	}
};

/*Makes A moving Rock, Called by View.Init*/
function animate(){
	var right=0;
	var totalTime=0;
	
	  Rock = document.getElementById('rock');
               rock.style.position= 'relative'; 
			   rock.style.top = '20px'; 
	function down(){
		rock.style.top=parseInt(rock.style.top)+ 10 +'px';
		if(parseInt(rock.style.top)>200){
			rock.style.top='20px';
		}
	
		totalTime+=100;
		if(totalTime<5000){
			setTimeout(down,100);
		}
	}
	setTimeout(down,100);
}
//-------------------------------------------------------------------------------------------------------
window.onload=View.init;	

setName=function(){

    console.log("setName called, setting name");
	var select=document.getElementById("selected").value;
    var input=document.getElementById("inputb").value;
    console.log(" select Value "+select);
    console.log(" input Value "+input);
	if(select=="P1")
    {
        document.getElementById("p1name").innerHTML=input;
    }else if(select=="P2")
    {console.log("P");
        document.getElementById("p2name").innerHTML=input;
    }


	//alert(t);
	
};
changeTurn=function(){
	if(turn==White)
	{return turn="Black";}
     else
	{return turn="White";}
};









 
