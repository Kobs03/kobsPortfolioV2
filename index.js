const img1 = document.querySelector(".imgAnim")
const img2 = document.querySelector(".imgAnim1")
const img3 = document.querySelector(".imgAnim2")
const img4 = document.querySelector(".imgAnim3")

const imgArr = ["assets/svg/html-1.svg", "assets/svg/css-3.svg","assets/svg/bootstrap.svg", "assets/svg/vue.svg", "assets/svg/javascript.svg",
"assets/svg/node.svg", "assets/svg/npm.svg", "assets/svg/express.svg", "assets/svg/mongodb-1.svg", "assets/svg/rest.svg", "assets/svg/adobe.svg", ]

let index1 = 0
let index2 = 1
let index3 = 2
let index4 = 3

setInterval (function() {

    img1.src = imgArr[index1++]
    img2.src = imgArr[index2++]
    img3.src = imgArr[index3++]
    img4.src = imgArr[index4++]
    if (index1 == imgArr.length) { index1 = 0 }
    if (index2 == imgArr.length) { index2 = 0 }
    if (index3 == imgArr.length) { index3 = 0 }
    if (index4 == imgArr.length) { index4 = 0 }

},2000)