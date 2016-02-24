'use strict'
document.addEventListener('DOMContentLoaded', init);

var addButton;
var addEnter;
var randomGroupButton;
var randomEnter;
var randomNameButton;
var names;
var randomNamePick;
var namesArray = [];
function init (){

addButton = document.getElementById('addName');
addButton.addEventListener('click', addName);

addEnter = document.getElementById('nameField');
addEnter.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
    	addName();
    }
});

randomGroupButton = document.getElementById('genRandomGroups');
randomGroupButton.addEventListener('click', randomGroup);

randomEnter = document.getElementById('groupAmount');
randomEnter.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
    	randomGroup();
    }
});

randomNameButton = document.getElementById('pickRandomName');
randomNameButton.addEventListener('click', randomName);

names = document.getElementById('nameList');

randomNamePick = document.getElementById('randomName');

}

function addName() {
	var name = document.getElementById("nameField").value;
	var nameArray = [];
	
		if(name.includes(', ')) {
			nameArray = name.split(', ');
		} else if(name.includes(',')) {
			nameArray = name.split(',');
		} else {
			nameArray.push(name);
		} 
		
			for (var i = 0; i < nameArray.length; i++) {
				var n = nameArray[i];
				namesArray.push(n);
				names.appendChild(document.createElement('li')).appendChild(document.createTextNode(n));
			
			
			
			}
	document.getElementById("nameField").value = "";
	return namesArray
}

function randomName() {
	var ranName = '';
	function getName() {
		ranName = namesArray[Math.floor(Math.random()*namesArray.length)];	
	}
	if(ranName == null || ranName === ''){
		getName();
	}

	randomNamePick.removeChild(randomNamePick.childNodes[0]);
	randomNamePick.appendChild(document.createTextNode(ranName));
}

function randomGroup() {
	var groupSize = document.getElementById("groupAmount").value;
	console.log(groupSize);
	document.getElementById("groupAmount").value = "";
}














