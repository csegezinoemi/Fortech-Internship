var projectList = [];
var developerList = [];
//projects, id= the index of array. I didn't use an array of objects for project and developers.
function addProject(){
	projectList.push(document.forms["fname"]["projectName"].value);
	document.getElementById("d").innerHTML = "The" + " " + document.forms["fname"]["projectName"].value + " " + "project was successfully added!";
}

function removeProject(){
	var index = document.forms["f"]["projectId"].value;	
	var i = projectList.indexOf(index);
	if(i != -1) {
		projectList.splice(i, 1);
	}
	if(projectList.length == 0){
		document.getElementById("dm").innerHTML = "There are no active projects.";
	}
	else{
		for (var i = 0; i < projectList.length; i++) {
				document.getElementById("dm").innerHTML = "Active pojects: " + projectList[i] + " " + i;
			}
		}
}

function showProjectList(){
	for (var i = 0; i < projectList.length; i++) {
		console.log(projectList[i] + " " + i);
	}
}
//developers. id= index
function addDeveloper(){
	developerList.push(document.forms["devForm"]["developerName"].value);
	document.getElementById("dev").innerHTML = document.forms["devForm"]["developerName"].value + " " + "was successfully added.";
}

function removeDeveloper(){
	var id = document.forms["formRemove"]["developerName"].value;	
	var i = developerList.indexOf(id);
	if(i != -1) {
		developerList.splice(i, 1);
	}
	if(developerList.length == 0){
		document.getElementById("remove").innerHTML = "There are no developers.";
	}
	else{
		for (var i = 0; i < developerList.length; i++) {
				document.getElementById("remove").innerHTML = "Developers: " + developerList[i] + " ID: " + i;
			}
		}
}
function showDeveloperList(){
	for (var i = 0; i < developerList.length; i++) {
		console.log(developerList[i] + " " + i);
	}
}

//status
var myArray = [];
var statusid = document.forms["statusForm"]["statusID"].value;
var developerid = document.forms["statusForm"]["devID"].value;
var projectid = document.forms["statusForm"]["projectId"].value;

function createStatus(){
	date = new Date().toISOString().substring(0, 10); 
	myArray.push({ id: 0, Developer: 1, Date: date, Status: "No scope changes made."});
	//myArray.push({ id: 1, Developer: 2, Date: date, Status: "No scope changes made."});
	myArray.push({ id: document.forms["statusForm"]["statusID"].value, Developer: developerid, Date: date, Status: document.forms["statusForm"]["inputstat"].value});
	for (var j = 0; j < myArray.length; j++){
	  console.log(myArray[j].id + " " + myArray[j].Developer + " " + myArray[j].Date + " " + myArray[j].Status);
	}
	document.getElementById("forstatus").innerHTML = "The status was added.";
}	

function deleteFromListStatus(){
	for (var i =0; i < myArray.length; i++)
	   if (myArray[i].id === "1") {
	      myArray.splice(i,1);
	      break;
	   }
	for (var j = 0; j < myArray.length; j++){
	  console.log(myArray[j].id + " " + myArray[j].Developer + " " + myArray[j].Date + " " + myArray[j].Status);
	}
	document.getElementById("rm").innerHTML = "The status was removed.";
}
function modifyStatus(){
	var objid = document.forms["modifyst"]["stid"].value;
	var newstat = document.forms["modifyst"]["newStatus"].value;
	objIndex = myArray.findIndex((obj => obj.id == objid));
	console.log("Before update: ", myArray[objIndex]);
	myArray[objIndex].Status = newstat;
	console.log("After update: ", myArray[objIndex]);
	document.getElementById("mod").innerHTML = "The status was modified.";
}
function dayStatusSummary(){
	var newArray = [];
	
	var today = new Date().toISOString().substring(0, 10); 
	for(var j=0;j < myArray.length;j++){
		for (var i =0; i< myArray.length; i++) {
		   if ( myArray[i].Date == today )
		   {
		     newArray[j] = myArray[i].Status;
		     console.log(newArray[j]);
		     document.getElementById("summary").innerHTML = newArray[j];
		   }
		}

	}
	/*for(var z = 0; z < newArray.length; z++){
	document.getElementById("summary").innerHTML = newArray[z];
}*/

} 	
