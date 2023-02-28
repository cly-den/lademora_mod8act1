var fullname = prompt("Please enter your full name");
document.getElementById("fname").innerHTML = fullname;
var username = prompt("Please enter your username");
document.getElementById("username").innerHTML = username;

if(confirm("What is your gender? \n Press OK if you are Male \n Cancel if Female") == true){
	alert("Your profile gender is set to MALE");
	document.getElementById("gender").innerHTML = "M";
}
else{
	alert("Your profile gender is set to FEMALE");
	document.getElementById("gender").innerHTML = "F";
}

var description = prompt("Please type a brief description of yourself");
document.getElementById("desc").innerHTML = description;
var birthyear = prompt("Please enter your Birth Year:");
document.getElementById("year").innerHTML = birthyear;
var age = 2023 - parseInt(birthyear);
document.getElementById("age").innerHTML = age;

if(confirm("Do you want a profile picture?") == true){
	var pic = prompt("Enter the file name of the picture.");
}
else{
	alert("No image has been set");
}
document.getElementById("ppic").src = pic;