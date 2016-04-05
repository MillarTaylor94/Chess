
//<script type="text/javascript" src="model.js"></script>
var model=new Model();
model.initArray();
model.gameinit();



var View=function(){
	


//for(i=0;i<120;i++){
//	console.log(model.gridModel[i]);
//;

	console.log("in View");
	

//this.model=new Model();

	//Function:change
//Parameters:boolean value
//returns: new value
//Purpose change the gridclass value.
change=function(value){
	if(value==false)
	{ value=true;}
else 
{ value=false;}

	return value;
},
	isEven=function(value){
    if (value%2 == 0)
        return true;
    else
        return false;
},

	init=function(){
	var gridiv=document.getElementById("grid");
	console.log("init");
	gridiv.innerHTML=generate(8,8)
},
	
getImage=function(h,v){


	var imageId=model.gridModel[toSquare(h,v)];
//	console.log(imageId.name);
	if(imageId.name=="none"){
		
		return "";
		
	}else if(imageId.name=="pawn"){
		
		if(imageId.color=="black"){
			return "blkpawn.png";
		}else{
			return "whtpawn.png";
		}
	}else if(imageId.name=="knight"){
		
		if(imageId.color=="black"){
			return "blkknight.png";
		}else{
			return "whtknight.png ";
		}
	}else if(imageId.name=="bishop"){
		if(imageId.color=="black"){
			return "blkbishop.png ";
		}else{
			return "whtbishop.png ";
		}
	}else if(imageId.name=="king"){
	
		if(imageId.color=="black"){
			return "blkking.png ";
		}else{
			return "whtking.png ";
		}
	}else if(imageId.name=="queen"){
		
		if(imageId.color=="black"){
			return "blkqueen.png ";
		}else{
			return "whtqueen.png ";
		}
	}else if(imageId.name=="rook"){
		if(imageId.color=="black"){
			return "blkrook.png ";
		}else{
			return "whtrook.png ";
		}
	}
	else{
		console.log("in else");
		return "";}
	
},
generate=function(width,height){
console.log("started grid");
	var html="";
	//const gridsize=8;
	var gridcolor=true;
var i=0;
var j=0;
var gridclass="red";
	html+="<table>"
	
	//for verticle ros
	for(j=0;j <height;j++)
	{if(isEven(j))
	  {
		  gridclass="black";
      }
      else
      {
		  gridclass="red";
      }
 
	html+="<tr>"
	//html+="<td class=\""+ gridclass +"\"></td>";
	
	for(i=0;i<width;i++)
	{ 

		
	//horizontally
	     if(gridcolor==true)
		 {
		gridclass="red";
		 }
	     else if(gridcolor==false)
		 {
		gridclass="black";
		
	     }
		 //change color class
		
	gridcolor=change(gridcolor)
	if(getImage(i,j)){
	html+="<td class=\""+ gridclass +"\"><img src=\""+ getImage(i,j) +"\"width=30px; height=35px;></td>";
	}else{
		html+="<td class=\""+ gridclass +"\"></td>";
	}
	}
	html+="</tr>";
	//change starting color of next row
	gridcolor=change(gridcolor);
	}
    
	html+="<\table>";
	return html;
	
},
changePlayer=function(){
	console.log("changePlayer");
	return document.getElementById("play").innerHTML = "White";
},

changeturn=function(){
	//var t=turn();
//	if(t%2==0)
	//
console.log("changeturn");

var t=model.turn();
console.log(t);
		return document.getElementById("turn").innerHTML ="3";
		
   // }else if(t%2==1){
	// return document.getElementById("turn").innerHTML = "black";
    //  }
},
changePiece=function(){
	document.getElementById("lost").innerHTML ="0";
},
UpdateState=function(){
	changePlayer();
	changePiece();
	changeturn();
}
}

View.prototype.getGen=function(){
	
	
	return this.generate(8,8);
}

init=function(){
	var gridiv=document.getElementById("grid");
	console.log("here here");
Viewer=new View();

gridiv.innerHTML=generate(8,8);
 UpdateState();


};
//-------------------------------------------------------------------------------------------------------
window.onload=init;	

changeTurn=function(){
	if(turn==White)
	{return turn="Black";}
     else
	{return turn="White";}
};









 
