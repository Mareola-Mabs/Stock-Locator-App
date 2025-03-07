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

// Search onInput
// const searchInput = document.getElementById("searchInput")

// searchInput.addEventListener("input", ()=>{
//     const stockName = document.querySelectorAll(".stock .stock__name")
//     let searchInputLower = searchInput.value.toLowerCase()
    
//         stockName.forEach(item => console.log(item.textContent))

// })