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
	 var x=XMList();
	 Model.gameinit(x);
	 View.getViewData(x);
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
 gameinit:function(arr){


	 //console.log("arr length"+ arr.length);
	console.log("Called GameInit function.");
	//white units
	console.log("Initializing units.");

	 for(var i=1;i<arr.length;i++){

		 
		 this.gridModel[toSquare(arr[i].width,arr[i].height)]=arr[i];
	 }
console.log("Adding units to gridModel Array.");

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