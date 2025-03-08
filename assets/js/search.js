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
const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("input", ()=>{
    let searchInputVal = searchInput.value.toLowerCase()
    const stock__name = document.querySelectorAll(".stock__name")
        for (x = 0; x < stock__name.length; x++){
            let stock__nameVal = stock__name[x].textContent.toLowerCase()
                stock__nameVal.includes(searchInputVal)? stock__name[x].parentElement.style.display = "flex"
                    :stock__name[x].parentElement.style.display = "none"
        }

})