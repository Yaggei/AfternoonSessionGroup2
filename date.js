

function daterefresh(){
    let seconds = 1000
    let timeout = setTimeout("displaydate()", seconds)
}
function displaydate(){
    let newdate = new Date()  
    document.getElementById("yagi").innerHTML = newdate
    daterefresh()

}