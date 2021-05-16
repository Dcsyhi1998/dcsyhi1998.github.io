function changeTitle(NameToApply) {
    if (document.getElementById('siteTitle').innerText != NameToApply) {
        if (NameToApply == "") {
            NameToApply = "MidnightChips Repo"
            document.getElementById('siteTitle').style.borderRight = ".15em solid #ebc034"
        } else {
            document.getElementById('siteTitle').style.borderRight = "none"
        }
        document.getElementById('siteTitle').style.opacity = 0
        setTimeout(function(){applyChangeTitle(NameToApply)},500)
    }
}

function applyChangeTitle(NameToApply) {
    document.getElementById('siteTitle').innerText = NameToApply
    document.getElementById('siteTitle').style.opacity = 1
}