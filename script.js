let liItem = document.body.getElementsByClassName("li1")
liItem = Array.from(liItem)
let bottomLine = document.body.getElementsByClassName("pagebreak2")
bottomLine = Array.from(bottomLine)
// console.log(liItem, bottomLine)
let selectedItem = document.getElementsByClassName("li2")
let mainImg = document.getElementById("mainImg")
let src  = [`images/image-product-1.jpg`, `images/image-product-2.jpg`, `images/image-product-3.jpg`, `images/image-product-4.jpg`]

for (let i = 1; i < 6; i++) {
    liItem[i].onmouseover = () => {
        bottomLine[i - 1].style.background = "hsl(26, 100%, 55%)"
    }
    liItem[i].onmouseout = () => {
        bottomLine[i - 1].style.background = "transparent"
    }
}
for (let j = 0; j < 4; j++) {
    selectedItem[j].onclick = () => {
        for (let k = 0; k < 4; k++)
        {
            selectedItem[k].setAttribute("id", "")
        }
        selectedItem[j].setAttribute("id", "li2")
        mainImg.setAttribute("src", src[j])
    }
}
