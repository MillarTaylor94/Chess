/**
 * Created by Taylor on 4/9/2016.
 */

/*Constants--------------------------------------------------------------------------------------------------------------------------------------------------
 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
 --------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
var START_INDEX=21;
var END_INDEX=98;
var HOR_MAX=7;
/*Update Functions--------------------------------------------------------------------------------------------------------------------------------------------------
 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
 --------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function initialize(){
    View.init();
    Model.init();

    var list=XMList();
    Model.gameinit(list);
    getViewData(list);
  //  Model.getViewData(list[0]);
    animate();
    regenerate();
};

//Function:getViewData
//Parameters:json array
//returns: none
//Updates view data for View and Model.
function getViewData(arr){
    Model.getViewData(arr);
    View.getViewData(arr);


}

//Function:UpdateClickResult
//Parameters:value
//returns: none
//Updates view data for View and Model.
function updateClickResult(value)
{
    View.updateClickResult(value);
}



//Function:change turn
//Updates view with whos turn it is
function changeTurn(){
    var turn=Model.changeTurn();
    View.changeTurn(turn);

}
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
};
function clickgrid(){
    var click=document.getElementById("tablediv");
    var col=this.cellIndex;
    var row=this.parentNode.rowIndex;
    //console.log("row = "+ row +"col= "+ col);
    var cell=click.rows[row].cells[col];

    //cell.style.backgroundColor="blue";
    var message = document.getElementById("clicklocation");
    message.innerHTML="You Clicked at grid element Row: "+ row.toString()+" Column: "+col.toString();
    View.evaluateSquare(col,row);
};


//this function is used to update the game grid with each pieces new location
function regenerate(){
   // console.log("Regenerating Grid");
    var gridiv = document.getElementById("grid");
    gridiv.innerHTML = View.generate(8, 8);
    addHandlers();
};
//this function is used to initialize the move declared inside the view for the Model
//Function:initMove
//Parameters:character-the piece in question,secondClick
//returns: none
//Purpose Link View to Model
function initMove(character,secondClick){
    console.log("initMove() called.");
    Model.startMove(character,secondClick);
};
//console.log("Model");
function toSquare(h,v){
    return (((21+h))+((v)*10));
};
function getWidth(input)
{
    return (input-START_INDEX)%10;
    
};
function getHeight(input,width)
{
    
    return (input-START_INDEX-width)/10;
};













/*Player Settings Functions--------------------------------------------------------------------------------------------------------------------------------------------------
 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
 --------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function setName(){

    console.log("setName called, setting name");
    var select=document.getElementById("selected").value;
    var input=document.getElementById("inputb").value;

    if(select=="P1")
    { Model.p1name=input;
        document.getElementById("p1name").innerHTML=Model.p1name;

    }else if(select=="P2")
    {console.log("P");
        Model.p2name=input;
        document.getElementById("p2name").innerHTML=Model.p2name;
    }


    //alert(t);

};







/*Misc Functions--------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
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
//------------
window.onload=initialize;