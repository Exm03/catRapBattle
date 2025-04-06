let button = document.querySelector('.btn')
let counter = document.querySelector('.counter')
let resultCounter = document.querySelector('.result')
let arrayYo = [catOne, catTwo, catThree, catFour, catFive, catSix, catSeven, catEight, catNine, catTen]
let arrayRes = [youWin, youLose]

button.addEventListener("click", startYo)

async function startYo() {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    let i = 1
   do { if (i === 5) {
    i ++
    resultCounter.innerHTML = `<img  class="img" src="./cats/ready.webp" alt="">
    <h1> Are You Ready?</h1>`
    await sleep(2000);
   }if (i === 10) {
    console.log('work')
    i ++
    let randomRes = Math.floor(Math.random() * arrayRes.length)
    let result = arrayRes[randomRes]
    result()
    await sleep(2000);
   }
   
   else{
    i ++
    randomYo(i)
    await sleep(2000);
   }
   } while (i < 11)
}

function randomYo(i) {
    console.log(i)
    let randomIndex = Math.floor(Math.random() * arrayYo.length)
    let selected = arrayYo[randomIndex]
    console.log(arrayYo)
    selected()
}

function catOne() {
    resultCounter.innerHTML = `<img  class="img" src="./cats/1.webp" alt="">
    <h1> Yo</h1>`
}

function catTwo() {
    resultCounter.innerHTML = `<img class="img" src="./cats/2.webp" alt="">
    <h1>AH... <br> Yo</h1>`
}

function catThree() {
    resultCounter.innerHTML = `<img class="img" src="./cats/3.webp" alt="">
    <h1>Hay Yo</h1>`
}

function catFour() {
    resultCounter.innerHTML = `<img class="img" src="./cats/4.webp" alt="">
    <h1> Yoooooooooo</h1>`
}

function catFive() {
    resultCounter.innerHTML = `<img class="img" src="./cats/5.webp" alt="">
    <h1> YOO BRO</h1>`
}

function catSix() {
    resultCounter.innerHTML = `<img class="img" src="./cats/6.webp" alt="">
    <h1> Йоу</h1>`
}

function catSeven() {
    resultCounter.innerHTML = `<img class="img" src="./cats/7.webp" alt="">
    <h1> MAYO</h1>`
}

function catEight() {
    resultCounter.innerHTML = `<img class="img" src="./cats/8.webp" alt="">
    <h1> Эй ты     Йоу</h1>`
}

function catNine() {
    resultCounter.innerHTML = `<img class="img" src="./cats/9.webp" alt="">
    <h1> YOO Йоу</h1>`
}

function catTen() {
    resultCounter.innerHTML = `<img class="img" src="./cats/10.webp" alt=""> <h1>Йоу. Ой МЯУ</h1>`
}

function youWin(params) {resultCounter.innerHTML= `<img class="img" src="./cats/win.webp" alt=""> <h1>YO WINNER</h1>`
}

function youLose(params) { resultCounter.innerHTML = `<img class="img" src="./cats/lose.webp" alt=""> <h1>YO LOSER</h1>`
}