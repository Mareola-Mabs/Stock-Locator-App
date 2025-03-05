// Search Btn Click
let i = 0

document.getElementById("searchBtn").addEventListener("click", ()=>{
    i++
    if (i % 2 == 0){
        document.getElementById("searchInput").style.width = "0"
    }
    else{
        document.getElementById("searchInput").style.width = "fit-content"
    }
})