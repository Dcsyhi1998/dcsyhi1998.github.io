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
}

//Enable Dark Mode if User Agent Contains "dark", set it to light if it containts "light"
if (navigator.userAgent.toLowerCase().includes("dark")) {
    document.getElementsByTagName("body")[0].id = "darkMode"
    darkMode = true
}else if(navigator.userAgent.toLowerCase().includes("light")) {
    document.getElementsByTagName("body")[0].id = "darkMode"
    darkMode = false
}