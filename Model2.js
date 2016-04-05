
//console.log("Model");
function toSquare(h,v){
	return (((21+h))+((v)*10));
}

//------------------------------------------------------------------------------------------------------------------------------------------------
var Model={
	
	
		player:"white",
		p1name:"White",
		p2name:"Black",
		movecount:4,
		p1turn:0,
		p2turn:3,
		p1lost:2,
		p2lost:1,
	gridModel:new Array(120),
	
	
   reset:function(){
	movecount=0;
	p1turn=0;
	p2turn=0;
	p1lost=0;
	p2lost=0;
	
    },
 init:function(){
	 console.log("Model Init Fucntion");
	 Model.initArray();
	 
	 Model.gameinit();
	 },

initArray: function(){
console.log("Initializing Array");
	var empty=new Model.makeEmpty("none","none");
	
	for(var i=0;i<120;i++){
		
	//this.gridModel.push(empty);
	Model.gridModel[i]=empty;

	}
	
},

 GameOver:function(king){
	 if (king.isAlive != false) {
	 } else return true;
 },
 gameinit:function(){
	console.log("Called GameInit function.");
	//white units
	console.log("Initializing units.");
	var p1=new Model.makePawn("pawn",1,1,"white","true");
	
	var p2=new Model.makePawn("pawn",1,2,"white","true");
	var p3=new Model.makePawn("pawn",1,3,"white","true");
	var p4=new Model.makePawn("pawn",1,4,"white","true");
	var p5=new Model.makePawn("pawn",4,5,"white","true");
	var p6=new Model.makePawn("pawn",1,6,"white","true");
	var p7=new Model.makePawn("pawn",1,7,"white","true");
	var p8=new Model.makePawn("pawn",1,0,"white","true");
	var r1= new Model.makeRook("rook",0,0,"white","true");
	var r2=new Model.makeRook("rook",0,7,"white","true");
	var k1=new Model.makeKnight("knight",0,6,"white","true");
	var k2= new Model.makeKnight("knight",2,2,"white","true");
	var b1=new Model.makeBishop("bishop",0,2,"white","true");
	var b2=new Model.makeBishop("bishop",0,5,"white","true")
	var King=new Model.makeKing("king",0,4,"white","true")
	var Queen=new Model.makeQueen("queen",0,3,"white","true");
	
	//black units
	var bp1=new Model.makePawn("pawn",6,1,"black","true");
	var bp2=new Model.makePawn("pawn",6,2,"black","true");
	var bp3=new Model.makePawn("pawn",6,3,"black","true");
	var bp4=new Model.makePawn("pawn",6,4,"black","true");
	var bp5=new Model.makePawn("pawn",6,5,"black","true");
	var bp6=new Model.makePawn("pawn",6,6,"black","true");
	var bp7=new Model.makePawn("pawn",3,7,"black","true");
	var bp8=new Model.makePawn("pawn",6,0,"black","true");
	var br1=new Model.makeRook("rook",7,0,"black","true");
	var br2=new Model.makeRook("rook",7,7,"black","true");
	var bk1=new Model.makeKnight("knight",7,6,"black","true");
	var bk2=new Model.makeKnight("knight",7,1,"black","true");
	var bb1=new Model.makeBishop("bishop",7,2,"black","true");
	var bb2=new Model.makeBishop("bishop",7,5,"black","true");
	var bKing=new Model.makeKing("king",7,3,"black","true");
	var bQueen=new Model.makeQueen("queen",7,4,"black","true");
	//for(var index=0;index<8;index++){
//		for(var jindex=0;jindex<8;jindex++){
//			gridModel[index][jindex].name="undefined";
//		}
//	}
console.log("Adding units to gridModel Array.")
this.gridModel[toSquare(p1.width,p1.height)]=p1;

this.gridModel[toSquare(json[1].width,json[1].height)]=json[1]
	 this.gridModel[toSquare(p2.width,p2.height)]=p2;
this.gridModel[toSquare(p3.width,p3.height)]=p3;
this.gridModel[toSquare(p4.width,p4.height)]=p4;
this.gridModel[toSquare(p5.width,p5.height)]=p5;
this.gridModel[toSquare(p6.width,p6.height)]=p6;
this.gridModel[toSquare(p7.width,p7.height)]=p7;
this.gridModel[toSquare(p8.width,p8.height)]=p8;
this.gridModel[toSquare(r1.width,r1.height)]=r1;
this.gridModel[toSquare(r2.width,r2.height)]=r2;
this.gridModel[toSquare(k1.width,k1.height)]=k1;
this.gridModel[toSquare(k2.width,k2.height)]=k2;
this.gridModel[toSquare(b1.width,b1.height)]=b1;
this.gridModel[toSquare(b2.width,b2.height)]=b2;
this.gridModel[toSquare(King.width,King.height)]=King;
this.gridModel[toSquare(Queen.width,Queen.height)]=Queen;


this.gridModel[toSquare(bp1.width,bp1.height)]=bp1;

this.gridModel[toSquare(bp2.width,bp2.height)]=bp2;
this.gridModel[toSquare(bp3.width,bp3.height)]=bp3;
this.gridModel[toSquare(bp4.width,bp4.height)]=bp4;
this.gridModel[toSquare(bp5.width,bp5.height)]=bp5;
this.gridModel[toSquare(bp6.width,bp6.height)]=bp6;
this.gridModel[toSquare(bp7.width,bp7.height)]=bp7;
this.gridModel[toSquare(bp8.width,bp8.height)]=bp8;
this.gridModel[toSquare(br1.width,br1.height)]=br1;
this.gridModel[toSquare(br2.width,br2.height)]=br2;
this.gridModel[toSquare(bk1.width,bk1.height)]=bk1;
this.gridModel[toSquare(bk2.width,bk2.height)]=bk2;
this.gridModel[toSquare(bb1.width,bb1.height)]=bb1;
this.gridModel[toSquare(bb2.width,bb2.height)]=bb2;
this.gridModel[toSquare(bKing.width,bKing.height)]=bKing;
this.gridModel[toSquare(bQueen.width,bQueen.height)]=bQueen;

},
	
//function:makePawn
//Parameters: name,Height,width,Color
makePawn:function(name,height,width,color,isAlive){
	this.name=name;
	this.height=height;
	this.width=width;
	this.movecount=0;
	this.moveHeight=2;
	this.color=color;
	this.isAlive=isAlive;
	this.sayname=function(){
		console.log(this.name);
	}

},

//function:makeRook
//Parameters: name,Height,width,Color
makeRook:function(name, height,width,color,isAlive){
	this.name=name;
	this.height=height;
	this.width=width;
	this.color=color;
	this.isAlive=isAlive;
	
},
//Function:makeKnight
//Parameters: name,Height,width,Color
makeKnight:function(name, height,width,color,isAlive){
	this.name=name;
	this.height=height;
	this.width=width
	this.color=color;
	this.isAlive=isAlive;
},
//Function:makeBishop
//Parameters: name,Height,width,Color
makeBishop:function(name, height,width,color,isAlive){
	this.name=name;
	this.height=height;
	this.width=width
	this.color=color;
	this.isAlive=isAlive;
},
//function:makeKing
//Parameters: name,Height,width,Color
makeKing:function(name, height,width,color,isAlive){
	this.name=name;
	this.height=height;
	this.width=width
	this.color=color;
	this.isAlive=isAlive;
	this.maxheight=1;
},
//function:makeQueen
//Parameters: name,Height,width,Color
makeQueen:function(name, height,width,color,isAlive){
	this.name=name;
	this.height=height;
	this.width=width
	this.color=color;
	this.isAlive=isAlive;
},
	
	
	Move:function(unit,vertical,horizontal){	
	if(unit.name=pawn)
	{
		movePawn(unit,vertical,horizontal);
	}
	else if(unit.name=rook)
	{
		moveRook(unit,vertical,horizontal);
	}
	else if(unit.name=knight)
	{
		moveKnight(unit,vertical,horizontal);
	}
	else if(unit.name=bishop)
	{
		moveBishop(unit,vertical,horizontal);
	}
	else if(unit.name=king)
	{
		moveKing(unit,vertical,horizontal);
	}
	else if(unit.name=queen)
	{
		moveQueen(unit,vertical,horizontal);
	}},
	
	
    getHeight:function(unit){
		return this.height;
	},
	getwidth:function(unit){
		return this.width;
	},
	movePawn:function(pawn,vertical,horizontal){
		if(pawn.isAlive==true)
		{
		checkPawn(this);
		if(pawn.color==black)
		{
			
			
		if(horizontal==(pawn.height-pawn.moveHeight)){
				if(vertical==(pawn.width-1||pawn.width+1))
				{
					if(checkAttack(vertical,horizontal)==false)
					{
						return;
					}
					else{
						var deadunit=gridModel[horizontal][vertical]
					deadunit.isAlive=false;
					gridModel[horizontal][vertical]=pawn;
					pawn.moveHeight=1;
					return;
					}
				}
			
			if(GridModel[vetrical][horizontal]==NULL)
				{
					GridModel[vertical][horizontal]=pawn;
					GridModel[vertical][horizontal+pawn.moveHeight]=NULL;
					pawn.moveHeight=1;
				}
				else
				{return;
			     }
			
				
					
					
			}
		}
		else{//color white
				if(horizontal==(pawn.height+pawn.moveHeight)){
					if(vertical==(pawn.width-1||pawn.width+1)){
					     if(checkAttack(vertical,horizontal)==false){
						return;
					}
					else{
						var deadunit=gridModel[horizontal][vertical]
					deadunit.isAlive=false;
					gridModel[pawn.height][pawn.width]=NULL;
					gridModel[horizontal][vertical]=pawn;
					pawn.height=vertical;
					pawn.width=horizontal;
					pawn.moveHeight=1;
					return;
					}
				}
		if(GridModel[horizontal][vertical]==NULL)
				{
					GridModel[horizontal][vertical]=pawn;
					GridModel[pawn.width][vertical]=NULL;
					pawn.height=vertical;
					pawn.width=horizontal;
					pawn.moveHeight=1;
				}
				else
				{return;
			    }	
		}
	
	}
		}
	},//end of movepawn
moveKing:function(king,vertical,horizontal){
	if(vertical==(king.height-maxheight)||vertical==(king.height+maxheight))
	{
		if(horizontal==(king.height-maxheight)||horizontal==(king.height+maxheight))
		{
			if(checkAttack(vertical,horizontal)==false)
			{
				gridModel[horizontal][vertical]=king;
				king.height=vertical;
				king.width=horizontal;
			}
			else
			{
				deadunit=gridModel[horizontal][vertical];
				deadunit.isAlive=false;
				gridModel[horizontal][vertical]=king;
				king.height=vertical;
				king.width=horizontal;
			}
		}
	}
	else if(horizontal==(king.height-maxheight)||horizontal==(king.height+maxheight))
	{
		if(vertical==(king.height-maxheight)||vertical==(king.height+maxheight)){
		if(checkAttack(vertical,horizontal)==false)
			{
				gridModel[horizontal][vertical]=king;
				king.height=vertical;
				king.width=horizontal;
			}
			else
			{
				deadunit=gridModel[horizontal][vertical];
				deadunit.isAlive=false;
				gridModel[horizontal][vertical]=king;
				king.height=vertical;
				king.width=horizontal;
			}//-------------------------------------------------------------still needs to check for out of  bounds-------------------------
		}
		
	}
}	,
	moveKnight:function(knight,vertical,horizontal){
	
},
	moveBishop:function(bishop,vertical,horizontal){	
},
	moveQueen:function(queen,vertical,horizontal){
	
},
	changeTurn:function(){
	if(this==black)
	{return "white";}
 else
  {return "black";}
},

	
	checkPawn:function(pawn){
	if(movecount>0){
		return this.moveHeight=1;
	}
	},
	getModel:function(horizontal,vertical){
	return gridModel[horizontal][vertical];
	},
 makeEmpty:function(name,color){
	this.name=name;
	this.color=color;
},
 getName:function(value){
	 if(value==1){
		 return Model.p1name;

	 }else if(value==2){
		 return Model.p2name;
	 }else{
		 alert("Error inside GetName!!!");
	 };
	 
 },//-----------------------------------------------Getters---------------------------
getPlayer:function(){
	
	console.log("Model.getPlayer Called");
if(Model.player=="White")
{
	Model.player="Black";
    
}
else{
	Model.player="White";
}
return Model.player;
}




};

//model