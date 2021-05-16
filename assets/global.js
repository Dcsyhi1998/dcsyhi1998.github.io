//Loading dark mode from cookie
var darkMode
if (document.cookie) {
    darkMode = readCookie("darkMode")
    if (darkMode == false) {
        document.getElementsByTagName("body")[0].id = "lightMode"
    }
} else {
    darkMode = true //Fallback if cookie if cookie does not exist
}

//Function to toggle dark mode
function toggleDarkMode() {
    if (darkMode) {
        document.getElementsByTagName("body")[0].id = "lightMode"
        darkMode = false
    } else {
        document.getElementsByTagName("body")[0].id = "darkMode"
        darkMode = true
    }
    createCookie("darkMode",darkMode,999)
}

//Enable Dark Mode if User Agent Contains "dark", set it to light if it containts "light"
if (navigator.userAgent.toLowerCase().includes("dark")) {
    document.getElementsByTagName("body")[0].id = "darkMode"
    darkMode = true
}else if(navigator.userAgent.toLowerCase().includes("light")) {
    document.getElementsByTagName("body")[0].id = "darkMode"
    darkMode = false
}

//Function to laod files
function loadFile(filename){
    if(window.XMLHttpRequest){xhttp=new XMLHttpRequest()}
    else{
        xhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xhttp.open("GET", filename, false);
    xhttp.send();
    return xhttp.responseText;
}

//Function to create a HTML element
function createElement(Name,Type) {
    var element = document.createElement(Type)
    if (Name != "") {
        element.className = Name
    }
    return(element)
}

//Function to read cookies
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) {
            if (c.substring(nameEQ.length,c.length) == "true") {
                return true
            } else if (c.substring(nameEQ.length,c.length) == "false") {
                return false
            } else {
                return c.substring(nameEQ.length,c.length);
            }

        }
	}
	return null;
}

//Function to write cookies
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
