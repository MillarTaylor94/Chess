
var Bool={False:0, True:1};
//------------------------------------------------------------------------------------------------------------------------------------------------
var Model={
	
	
		player:"White",
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
	 console.log("Model Init Function");
	 Model.initArray();
	
	 },
//function initializes every array element to none.
initArray: function(){
console.log("Initializing Array");
	var empty=new Model.makeEmpty("none","none");
	
	for(var i=0;i<120;i++){
	//this.gridModel.push(empty);
	Model.gridModel[i]=empty;

	}
	
},
    getViewData:function(arr){
        this.p1name=arr.p1name;
        this.p2name=arr.p2name;
         this.player  
            //p1name:"White",
            //p2name:"Black",
            //movecount:4,
            //p1turn:0,
            //p2turn:3,
            //p1lost:2,
            //p2lost:1,

    },
    gameinit:function(arr){


	 //console.log("arr length"+ arr.length);
	console.log("Called GameInit function.");
	//white units
	 for(var i=1;i<arr.length;i++){
 		 this.gridModel[toSquare(arr[i].width,arr[i].height)]=arr[i];
		 //console.log(toSquare(arr[i].width,arr[i].height))
	 }
    },

    moveRook:function(character,secondClick){
        console.log(" In moveRook() function");
        //first Evaluate if it is a valid move
        //this function has a bug!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

if(secondClick>START_INDEX&& secondClick<END_INDEX) {

//sentinal for horizontal move.
   var value=secondClick-toSquare(character.width,character.height);
    console.log("value "+value);

    //previous index for clearing previous square.
 var previousIndex = toSquare(character.width, character.height);
    //you minus 1 because grid indexes are 0-7
    //if value<7 and value>-7

    if((secondClick%10)-1==character.width) {



        if (this.gridModel[secondClick].name == "none") {

            this.gridModel[secondClick] = character;
            character.width = getWidth(secondClick);
            character.height = getHeight(secondClick, character.width);
            this.gridModel[previousIndex] = null;
            this.gridModel[previousIndex] = new this.makeEmpty("none", "none");
            changeTurn ();
            regenerate();
        }
        else if(this.Attack(character,secondClick)==Bool.True){
            this.gridModel[secondClick] = character;
            character.width = getWidth(secondClick);
            character.height = getHeight(secondClick, character.width);
            this.gridModel[previousIndex] = null;
            this.gridModel[previousIndex] = new this.makeEmpty("none", "none");
            changeTurn ();
            regenerate();
        }
        else{updateClickResult("Invalid Move");
        }

        }else if(value<=HOR_MAX&&value>=-HOR_MAX) {
        //if(){}
                // if(getHeight(secondClick, character.width)>character.height||getHeight(secondClick, character.width)<character.height){

                 if(Math.floor(getHeight(secondClick, character.width))>character.height||Math.ceil(getHeight(secondClick,character.width))<character.height){
                     console.log("nice try");
                 }else{
                     if(this.Attack(character,secondClick)==Bool.True) {
                         console.log ("greater than");
                         this.gridModel[secondClick] = character;


                         character.width = getWidth (secondClick);
                         character.height = getHeight (secondClick, character.width);


                         this.gridModel[previousIndex] = null;
                         this.gridModel[previousIndex] = new this.makeEmpty ("none", "none");

                         regenerate ();
                         changeTurn ();
                     }
                     else{
                         updateClickResult("Invalid Move");
                         }
                 }



        console.log("in horizontal move");


    }
else{
        updateClickResult("Invalid move");

        }




}//secondClick>START_INDEX&& secondClick<END_INDEX
    },
	movePawn:function(character,secondClick){


        //notes:---------------------------------------------------------------------------
        //Fix pawn moving backwards;
        //
        //
        var previousIndex = toSquare(character.width, character.height);
        var moveValue=secondClick-previousIndex;
        console.log(moveValue);
        if(character.moveCount==0){
            if(Math.abs(moveValue)==10||Math.abs(moveValue)==20) {
                character.moveCount++;
                this.gridModel[secondClick] = character;



                character.width = getWidth(secondClick);
                character.height = getHeight(secondClick, character.width);


                this.gridModel[previousIndex] = null;
                this.gridModel[previousIndex] = new this.makeEmpty("none", "none");
                changeTurn();
                regenerate();
            }

        }else{
            if(Math.abs(moveValue)==10) {
                this.gridModel[secondClick] = character;
                character.width = getWidth(secondClick);
                character.height = getHeight(secondClick, character.width);

                //clear old space
                this.gridModel[previousIndex] = null;
                this.gridModel[previousIndex] = new this.makeEmpty("none", "none");
                changeTurn();
                regenerate();
            }else if(Math.abs(moveValue)==20){
                View.updateClickResult("Invalid move, Pawn can only move one space!");
            }
        else{
                View.updateClickResult("Invalid move");
                console.log("Invalid Move");
            }
        }
		
	},//end of movepawn
	moveKnight:function(character, secondClick){
        var previousIndex = toSquare(character.width, character.height);
        var MoveTotal=previousIndex-secondClick;
        if(Math.abs(MoveTotal)==19||Math.abs(MoveTotal)==21||Math.abs(MoveTotal)==8||Math.abs(MoveTotal)==12){
          if(this.Attack(character,secondClick)==Bool.True){
            this.gridModel[secondClick] = character;

            character.width = getWidth(secondClick);
            character.height = getHeight(secondClick, character.width);


            this.gridModel[previousIndex] = null;
            this.gridModel[previousIndex] = new this.makeEmpty("none", "none");
            changeTurn();
            regenerate();
          }else{

              updateClickResult("Invalid Move");
          }

        }
        else{ updateClickResult("Invalid move");

        }

},
	moveBishop:function(character,secondClick){
        var previousIndex = toSquare(character.width, character.height);
        var heightDif=getHeight(secondClick,character.width)-character.height;
        totalMove=secondClick-previousIndex;

        if(totalMove%11==0||totalMove%9==0){
            if(this.Attack(character,secondClick)==Bool.True) {
            this.gridModel[secondClick] = character;

            character.width = getWidth(secondClick);
            character.height = getHeight(secondClick, character.width);


            this.gridModel[previousIndex] = null;
            this.gridModel[previousIndex] = new this.makeEmpty("none", "none");
            changeTurn();
            regenerate();
            }
            else{
                updateClickResult("Invalid Move");
            }
        }else{
            updateClickResult("Invalid move");

        }


},
	moveQueen:function(queen,vertical,horizontal){
	
},

	
	getModel:function(horizontal,vertical){
	return gridModel[horizontal][vertical];
	},
 makeEmpty:function(name,color){
	this.name=name;
	this.color=color;
},
//-----------------------------------------------Getters---------------------------


    changeTurn: function(){
        if(this.player=="white"){
            
            this.player="black";
            return "Black";
        }else if(this.player=="black"){
            this.player="white";
            return "White";
        }
    },
	gridref: function(col,row){
		//console.log("In Gridrerence");
		var x=Model.gridModel[toSquare(col, row)];

	return Model.gridModel[toSquare(col,row)];
},

    startMove:function(character,secondClick){
        console.log("startMove() Called");//firstclick=toSquare(character.width,character.height);//passed into next function
if(character.color==this.player) {

    if (character.name == "rook") {
        console.log("Rook Selected, calling MoveRook function.");

        this.moveRook(character, secondClick);
    } else if (character.name == "knight") {
        this.moveKnight(character, secondClick);
        console.log("Knight Selected, calling moveKnight function.");
    } else if (character.name == "bishop") {

        console.log("Bishop Selected, calling moveBishop function.");
        this.moveBishop(character, secondClick);
    } else if (character.name == "queen") {

        console.log("Queen Selected, calling moveQueen function.");
    } else if (character.name == "king") {

        console.log("King Selected, calling moveKing function.");
    } else if (character.name == "pawn") {
        this.movePawn(character, secondClick);
        console.log("Pawn Selected, calling movePawn function.");
    } else {
        console.log("error inside Start Move function");
    }
}else{
    
    updateClickResult("It is Not your Turn!");
}
    },
    Attack:function(character,secondClick){
        var Character2=this.gridModel[secondClick];
      if(Character2.color!=character.color){
          return Bool.True;
      }else if(Character2.color==character.color){
          return Bool.False;

        }else if(character2.name=="none"){
          return Bool.True;
      }else{
          return Bool.True;
      }

    },



getViewData:function(arr){

    //Function:getViewData
//Parameters:json array
//returns: none
//Updates view data for View and Model.
    Model.player=arr[0].Playerturn;
    Model.p1name=arr[0].p1name;
    Model.p2name=arr[0].p2name;
    Model.lost=arr[0].pieceslost;
    Model.pturn=arr[0].currentturn;
}

};



//model