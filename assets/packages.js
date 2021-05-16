//Get the list of packages
var listOfPackages = loadFile("../packageList").split(/\r?\n/)

//Constants for navigating packageDepictionArray with ease
const _packageName = 0
const _packageDescription = 1

//Loading Packages
for (i = 0; i < listOfPackages.length; i++) {
    //Create the link
    a = createElement("","a")
    a.setAttribute('href','/depiction/?'+listOfPackages[i])
    //Create the banner image
    banner = createElement("bannerImage","img")
    banner.setAttribute('src', listOfPackages[i] + "/banner.png")
    banner.setAttribute("onerror","removeBanner(this)")
    //Create the package icon
    icon = createElement("bannerIcon","img")
    icon.setAttribute('src', listOfPackages[i] + "/icon.png")
    //Create the wrapper which stores the banner
    packageWrapper = createElement("packageWrapper","div")
    packageWrapper.setAttribute('style','background-image: url(' + listOfPackages[i] + "/banner.png);animation-delay: " + i * .25 + "s")
    packageWrapper.append(icon, banner)
    //Loading Package Info
    var packageDepictionArray = loadPackageInfo(listOfPackages[i])
    //Create the package title
    packageTitle = createElement("packageTitle","p")
    packageTitle.innerText = packageDepictionArray[_packageName]
    //Create the package description
    packageDescription = createElement("","p")
    var converter = new showdown.Converter()
    packageDescription.innerHTML = converter.makeHtml(packageDepictionArray[_packageDescription])
    //Create the lower section which holds package info
    packageLowerInfo = createElement("packageLowerInfo","div")
    packageLowerInfo.append(packageTitle, packageDescription)
    //Append the package to the list
    packageWrapper.appendChild(packageLowerInfo)
    a.appendChild(packageWrapper)
    document.getElementsByClassName('wrapper')[0].appendChild(a)
}

//Function to load all the package info into a array
function loadPackageInfo(packageFolderDirectory) {
    //Setting up return output
    var packageDepictionArray = []
    //Loading Depiction raw markdown
    var packageDepiction = loadFile(packageFolderDirectory + "/info.md")
    //Remove Extra Bold Headings from Markdown (not supported atm)
    packageDepiction = packageDepiction.replace(/###|##/g,"#")
    //Remove Links and Badges from Markdown (not supported atm)
    packageDepiction = packageDepiction.replace(/(\[\!\[.*]\(.*\)\]\(.*\))|(\[.*\]\(.*\))/g,'')
    //Locating Package Name
    var packageName = packageDepiction.split('\n', 1)[0]
    packageName = packageName.replace("# ","")
    packageDepictionArray.push(packageName)
    //Removing Package Name and Short Description from Depiction string
    var lines = packageDepiction.split('\n')
    lines.splice(0,1);
    if (lines[0].includes('#')) {
        lines.splice(0,1);
    }
    packageDepiction = lines.join('\n')
    //Locating Package Full Description
    var packageDescription = ""
    for (k = 0; k < packageDepiction.search(/\#/); k++) {
        packageDescription = packageDescription + packageDepiction[k]
    }
    packageDepictionArray.push(packageDescription)
    return packageDepictionArray
}

//Function that is called when a banner fails to load
function removeBanner(element) {
    //Make Package Compact
    element.parentElement.className = "packageWrapperCompact"
    //Remove Old Banner
    element.parentElement.removeChild(element)  
}