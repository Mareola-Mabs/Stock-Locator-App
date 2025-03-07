let j = 0

document.querySelector(".nav__menu").addEventListener("click", ()=>{
    j++
    if (j % 2 == 1){
        document.querySelector(".side__menu").style.transform = "translateX(0)"
    }
    else{
        document.querySelector(".side__menu").style.transform = "translateX(-100%)"
    }
})