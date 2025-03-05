// Shorten Console.log
const cl = console.log


//DOM Items
function validate (){
    let errorOr = document.querySelector(".errorOr")
    const username = document.forms[0]["username"].value
    const password = document.forms[0]["password"].value

    let usernameLower = username.toString().toLowerCase()
    let passwordLower = password.toString().toLowerCase()

    if (usernameLower === "" || passwordLower === ""){
        errorOr.textContent = "Please Enter Your Details"
        document.forms[0]["username"].focus()
        return false
    }

    else if (usernameLower !== "microchips"){
        errorOr.textContent = "Username Incorrect"
        return false
    }
    
    else if (passwordLower !== "microchips"){
        errorOr.textContent = "Password Incorrect"
        return false
    }

    else{}
}