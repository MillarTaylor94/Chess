
function SendUser(){
	/*This Function Sends Data to the server to be validated*/
	console.log("SendUser");
		/*user and password grabbed from their input boxes*/
	var user=document.getElementById("user").value;
	var pass=document.getElementById("passinput").value;
	/*parsing user and pass toghether to be sent to server*/
	var data="userName="+ user + "&password=" + pass;
	/*create your Request*/
	var localRequest=new XMLHttpRequest();
	localRequest.open("POST", "http://universe.tc.uvu.edu/cs2550/assignments/PasswordCheck/check.php");
	localRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	console.log(data);
	/*Declare where errors will be displayed*/
	var error=document.getElementById("ajresponse");

	localRequest.onreadystatechange=function(){
	/*If Request is good*/
	if(localRequest.readyState==4&&localRequest.status==200){
		//console.log("success");
		console.log(localRequest.responseText);
		
		
		/*parse the data in */
var t2=JSON.parse(localRequest.responseText);
console.log(t2["result"]);
var name=t2["userName"];
var time=t2["timestamp"];

var nametime=(name+ " " + time);
          /*Store in timestamp*/
		localStorage.cs2550timestamp=nametime;
		localStorage.setItem("name", name);
		console.log(localStorage.cs2550timestamp);
		
		if(t2["result"]=="valid")
		{window.location.href="About.html";}
		
		
		if(t2["result"]=="invalid"){
		error.innerHTML="Invalid Password";
		}
		
	}//end of if statement			
  };//localRequest ready state change end.
	localRequest.send(data);
}
function getLocal(){
	
	/*Function used to display timestamp*/
	var disp=document.getElementById("timestamps");
	var timestamp=localStorage.cs2550timestamp;
//	alert("The User and timestamp is "+timestamp);
	disp.innerHtml="timestamp";
console.log(timestamp);
}
/*Clears Local Storage*/
function clearStorage(){
	console.log("clearStoage Called, Clearing Local Storage");
	localStorage.clear();
	
	alert(localStorage.length);
}

/*Function used to load XML Request.*/
function XMList(){
    console.log("entered Funciton XML");
	var request=new XMLHttpRequest();
	request.open('GET',"objects.json",false);
	request.send(null);
//console.log("response is "+request.responseText);
	var xmlarray=JSON.parse(request.responseText);
	//console.log("Array info "+xmlarray.length);
	//var x=array[1].width+array[1].width;

//console.log(array.length);

return xmlarray;
	//if(request.status!= 200){
		
		//alert("XML Request Failed with "+ request.status +" returned");

	//}
	

	
	
}