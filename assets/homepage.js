//タイトルにアニメーション文字の変更を追加
function changeTitle(NameToApply) {
    if (document.getElementById('siteTitle').innerText != NameToApply) {
        if (NameToApply == "") {
            NameToApply = "Dcsyhi Repo"
            document.getElementById('siteTitle').style.borderRight = ".15em solid #ebc034"
        } else {
            document.getElementById('siteTitle').style.borderRight = "none"
        }
        document.getElementById('siteTitle').style.opacity = 0

        setTimeout(function(){
            applyChangeTitle(NameToApply)
        },500)
    }
}
//0.5秒間隔で実行される
function applyChangeTitle(NameToApply) {
    document.getElementById('siteTitle').innerText = NameToApply
    document.getElementById('siteTitle').style.opacity = 1
}