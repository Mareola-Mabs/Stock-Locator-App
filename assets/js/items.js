const stockImg = ["./images/stock000.jpg", "./images/stock001.jpg", "./images/stock002.jpg", "./images/blank.png", "./images/blank.png", "./images/blank.png", "./images/blank.png", "./images/blank.png", "./images/blank.png", "./images/blank.png", "./images/blank.png", "./images/blank.png"]
console.log(stockImg.length)

const stockName = ["USB to Serial", "VGA to HDMI", "USB to type C", "USB to Serial", "VGA to HDMI", "USB to type C", "USB to Serial", "VGA to HDMI", "USB to type C", "USB to Serial", "VGA to HDMI", "Rj45 Connector"]
console.log(stockName.length)


const stockPrice = ["N20,000", "N2,000", "N3,000", "N5000", "N22,000", "N50,000", "N10,000", "N2,000", "N3,000", "N5000", "N22,000", "N3,500"]
console.log(stockPrice.length)

const main__container = document.querySelector("main.main__container")

// Populating the Page
let k;
for (k = 0; k < stockName.length; k++){
    let parentDiv = document.createElement("div")
    parentDiv.classList.add("stock")

    let childDiv = document.createElement("div")
    childDiv.classList.add("stock__serial")
    childDiv.textContent = k

    let childDiv1 = document.createElement("img")
    childDiv1.classList.add("stock__img")
    childDiv1.src = stockImg[k]

    let childDiv2 = document.createElement("div")
    childDiv2.classList.add("stock__name")
    childDiv2.textContent = stockName[k]

    let childDiv4 = document.createElement("div")
    childDiv4.classList.add("stock__number")
    childDiv4.textContent = "00"+ k


    let childDiv3 = document.createElement("div")
    childDiv3.classList.add("stock__price")
    childDiv3.textContent = stockPrice[k]


    parentDiv.appendChild(childDiv);
    parentDiv.appendChild(childDiv1);
    parentDiv.appendChild(childDiv2);
    parentDiv.appendChild(childDiv4);
    parentDiv.appendChild(childDiv3);

    main__container.appendChild(parentDiv);


}