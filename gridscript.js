

//initialization function
function init(){
	var gridiv=document.getElementById("grid");
	gridiv.innerHTML=generate(8,8)
}

//Generates grid
function generate(width,height){
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
	html+="<td class=\""+ gridclass +"\"></td>";
	}
	html+="</tr>";
	//change starting color of next row
	gridcolor=change(gridcolor);
	}
    
	html+="<\table>";
	return html;
	
}
function isEven(value){
    if (value%2 == 0)
        return true;
    else
        return false;
}
//Function:change
//Parameters:boolean value
//returns: new value
//Purpose change the gridclass value.
function change(value)
{
	if(value==false)
	{ value=true;}
else 
{ value=false;}

	return value;
}
//function:makePawn
//Parameters: name,Height,width,Color
var makePawn=function(name,height,width,color){
	this.name=name;
	this.height=height;
	this.movecount=0;
	this.moveHeight=2;
	this.color=color;
	this.sayname=function(){
		console.log(this.name);
	}
}
//function:makeRook
//Parameters: name,Height,width,Color
var makeRook=function(name, height,width,color,isAlive){
	this.name=name;
	this.height=height;
	this.width=width;
	this.color=color;
	this.isAlive=isAlive;
	
}
//Function:makeKnight
//Parameters: name,Height,width,Color
var makeKnight=function(name, height,width,color,isAlive){
	this.name=name;
	this.height=height;
	this.width=width
	this.color=color;
	this.isAlive=isAlive;
}
//Function:makeBishop
//Parameters: name,Height,width,Color
var makeBishop=function(name, height,width,color,isAlive){
	this.name=name;
	this.height=height;
	this.width=width
	this.color=color;
	this.isAlive=isAlive;
}
//function:makeKing
//Parameters: name,Height,width,Color
var makeKing=function(name, height,width,color,isAlive){
	this.name=name;
	this.height=height;
	this.width=width
	this.color=color;
	this.isAlive=isAlive;
}
//function:makeQueen
//Parameters: name,Height,width,Color
var makeQueen=function(name, height,width,color,isAlive){
	this.name=name;
	this.height=height;
	this.width=width
	this.color=color;
	this.isAlive=IsAlive;
}
//funciton: gameinit()
function gameinit(){
	
	//white units
	var p1=new makePawn(pawn,2,1,white,true);
	var p2=new makePawn(pawn,2,2,white,true);
	var p3=new makePawn(pawn,2,3,white,true);
	var p4=new makePawn(pawn,2,4,white,true);
	var p5=new makePawn(pawn,2,5,white,true);
	var p6=new makePawn(pawn,2,6,white,true);
	var p7=new makePawn(pawn,2,7,white,true);
	var p8=new makePawn(pawn,2,8,white,true);
	var r1= new makeRook(rook,1,1,white,true);
	var r2=new makeRook(rook,1,8,white,true);
	var k1=new makeKnight(knight,1,2,white,true);
	var k2= new makeKnight(knight,1,7,white,true);
	var b1=new makeBishop(bishop,1,3,white,true);
	var b2=new makeBishop(bishop,1,6,white,true)
	var King=new makeKing(king,1,5,white,true)
	var Queen=new makeQueen(queen,1,4,white,true);
	
	//black units
	var bp1=new makePawn(pawn,7,1,black,true);
	var bp2=new makePawn(pawn,7,2,black,true);
	var bp3=new makePawn(pawn,7,3,black,true);
	var bp4=new makePawn(pawn,7,4,black,true);
	var bp5=new makePawn(pawn,7,5,black,true);
	var bp6=new makePawn(pawn,7,6,black,true);
	var bp7=new makePawn(pawn,7,7,black,true);
	var bp8=new makePawn(pawn,7,8,black,true);
	var br1=new makeRook(rook,8,1,black,true);
	var br2=new makeRook(rook,8,8,black,true);
	var bk1=new makeKnight(bk1,8,2,black,true);
	var bk2=new makeKnight(bk2,8,7,black,true);
	var bb1=new makeBishop(bb1,8,3,black,true);
	var bb2=new makeBishop(bb2,8,6,black,true))
	var bKing=new makeKing(bking,8,4,black,true)
	var bQueen=new makeQueen(bqueen,8,5,black,true);
	
	
}
function move(unit,vertical,horizontal)
{
	if(unit.name=pawn)
	{
		movePawn(unit,vertical,horizonal);
	}
	else if(unit.name=rook)
	{
		moveRook(unit,vertical,horizonal);
	}
	else if(unit.name=knight)
	{
		moveKnight(unit,vertical,horizonal);
	}
	else if(unit.name=bishop)
	{
		moveBishop(unit,vertical,horizonal);
	}
	else if(unit.name=king)
	{
		moveKing(unit,vertical,horizonal);
	}
	else if(unit.name=queen)
	{
		moveQueen(unit,vertical,horizonal);
	}
}


//model


moveQueen:function(queen)
{}
moveKing(){
	
}
model.prototype.checkPawn(pawn)=function{
	if(movecount>0)
	{return this.moveHeight=1;}
}
//
var c=
window.onload=init;