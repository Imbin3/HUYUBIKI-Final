const gameTime = document.querySelector('.game-rules__time')
const gameClicks = document.querySelector('.game__list-clicks')
const gameBestScore = document.querySelector('.game-rules__best-score')
const gameTimer = document.querySelector('.game-timer__text')
const startGameBtn = document.querySelector('.game-timer__start-btn')
const gameIcon = document.querySelector('.game-field__icon')

const icons = [
    '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16L3.54223 12.3383C1.93278 11.0162 1 9.04287 1 6.96005C1 3.11612 4.15607 0 8 0C11.8439 0 15 3.11612 15 6.96005C15 9.04287 14.0672 11.0162 12.4578 12.3383L8 16ZM3 6H5C6.10457 6 7 6.89543 7 8V9L3 7.5V6ZM11 6C9.89543 6 9 6.89543 9 8V9L13 7.5V6H11Z"></path> </g></svg>',

    '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z"></path> </g></svg>',

    '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.5 3C12.3284 3 13 2.32843 13 1.5C13 0.671573 12.3284 0 11.5 0C10.6716 0 10 0.671573 10 1.5C10 2.32843 10.6716 3 11.5 3Z" ></path> <path d="M0 12C0 10.4697 1.14578 9.20702 2.62626 9.02304L5.00001 10.6055V14.2361C4.46925 14.7111 3.76836 15 3 15C1.34315 15 0 13.6568 0 12Z" "></path> <path d="M11 14.2361C11.5308 14.7111 12.2316 15 13 15C14.6569 15 16 13.6569 16 12C16 10.3431 14.6569 9 13 9C12.2316 9 11.5308 9.28885 11 9.76389V14.2361Z" ></path> <path d="M8.28111 5.01444C8.29524 5.00503 8.31184 5 8.32881 5C8.36139 5 8.39117 5.0184 8.40574 5.04754L9.38197 7H13V5H10.618L10.1946 4.15311C9.84124 3.44641 9.11893 3 8.32881 3C7.91699 3 7.51437 3.1219 7.17171 3.35034L4.86132 4.8906C4.32322 5.24934 4 5.85327 4 6.5C4 7.14673 4.32322 7.75066 4.86132 8.1094L7 9.53518V13H9V8.46482L6.05278 6.5L8.28111 5.01444Z"></path> </g></svg>',

    '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.2678 7.26777C14.2915 8.24408 12.7085 8.24408 11.7322 7.26777L11.6465 7.18199L7.182 11.6464L7.26777 11.7322C8.24408 12.7085 8.24408 14.2914 7.26777 15.2677C6.29146 16.244 4.70854 16.244 3.73223 15.2677C3.24408 14.7796 2.99998 14.1398 2.99998 13.5V13H2.50434C1.86309 13.0011 1.22149 12.757 0.732233 12.2677C-0.244078 11.2914 -0.244078 9.70852 0.732233 8.7322C1.70854 7.75589 3.29146 7.75589 4.26777 8.7322L4.35358 8.81802L8.81803 4.35356L8.73223 4.26777C7.75592 3.29146 7.75592 1.70854 8.73223 0.732233C9.70854 -0.244078 11.2915 -0.244078 12.2678 0.732233C12.7581 1.22255 13.0022 1.85737 13 2.5V3H13.5C14.1398 3 14.7796 3.24407 15.2678 3.73223C16.2441 4.70854 16.2441 6.29146 15.2678 7.26777Z" ></path> </g></svg>',

    '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C7.10457 3 8 2.10457 8 1H15V3L9 9V13H12V15H4V13H7V9L1 3V1H4C4 2.10457 4.89543 3 6 3ZM9 6C9.55228 6 10 5.55228 10 5C10 4.44772 9.55228 4 9 4C8.44772 4 8 4.44772 8 5C8 5.55228 8.44772 6 9 6Z" ></path> </g></svg>',

    '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1H15V15H1V1ZM6 4C6 4.82843 5.32843 5.5 4.5 5.5C3.67157 5.5 3 4.82843 3 4C3 3.17157 3.67157 2.5 4.5 2.5C5.32843 2.5 6 3.17157 6 4ZM11.5 5.5C12.3284 5.5 13 4.82843 13 4C13 3.17157 12.3284 2.5 11.5 2.5C10.6716 2.5 10 3.17157 10 4C10 4.82843 10.6716 5.5 11.5 5.5ZM6 12C6 12.8284 5.32843 13.5 4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12ZM11.5 13.5C12.3284 13.5 13 12.8284 13 12C13 11.1716 12.3284 10.5 11.5 10.5C10.6716 10.5 10 11.1716 10 12C10 12.8284 10.6716 13.5 11.5 13.5ZM6 8C6 8.82843 5.32843 9.5 4.5 9.5C3.67157 9.5 3 8.82843 3 8C3 7.17157 3.67157 6.5 4.5 6.5C5.32843 6.5 6 7.17157 6 8ZM11.5 9.5C12.3284 9.5 13 8.82843 13 8C13 7.17157 12.3284 6.5 11.5 6.5C10.6716 6.5 10 7.17157 10 8C10 8.82843 10.6716 9.5 11.5 9.5Z" ></path> </g></svg>',

    '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C6.89543 0 6 0.895431 6 2V2.0359L5.96891 2.01795C5.01233 1.46566 3.78915 1.79341 3.23686 2.75C2.68458 3.70659 3.01233 4.92977 3.96891 5.48205L4 5.5L3.96891 5.51795C3.01233 6.07023 2.68458 7.29342 3.23686 8.25C3.78915 9.20658 5.01233 9.53434 5.96891 8.98205L6 8.9641V9C6 10.1046 6.89543 11 8 11C9.10457 11 10 10.1046 10 9V8.9641L10.0311 8.98205C10.9877 9.53434 12.2109 9.20658 12.7631 8.25C13.3154 7.29342 12.9877 6.07023 12.0311 5.51795L12 5.5L12.0311 5.48205C12.9877 4.92977 13.3154 3.70659 12.7631 2.75C12.2109 1.79341 10.9877 1.46566 10.0311 2.01795L10 2.0359V2C10 0.895431 9.10457 0 8 0ZM7.99995 7C8.82838 7 9.49995 6.32843 9.49995 5.5C9.49995 4.67157 8.82838 4 7.99995 4C7.17152 4 6.49995 4.67157 6.49995 5.5C6.49995 6.32843 7.17152 7 7.99995 7Z" ></path> <path d="M7 16H6C3.23858 16 1 13.7614 1 11V10H2C4.76142 10 7 12.2386 7 15V16Z" ></path> <path d="M10 16H9V15C9 12.2386 11.2386 10 14 10H15V11C15 13.7614 12.7614 16 10 16Z" ></path> </g></svg>',

    '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4C12 4.25656 11.9758 4.50748 11.9297 4.75061C11.9531 4.75021 11.9765 4.75 12 4.75C14.2091 4.75 16 6.54086 16 8.75C16 10.9591 14.2091 12.75 12 12.75C10.7347 12.75 9.60658 12.1625 8.87361 11.2454L10 15V16H6V15L7.12639 11.2454C6.39342 12.1625 5.26532 12.75 4 12.75C1.79086 12.75 0 10.9591 0 8.75C0 6.54086 1.79086 4.75 4 4.75C4.02349 4.75 4.04692 4.7502 4.07031 4.75061C4.02415 4.50748 4 4.25656 4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4Z" ></path> </g></svg>',

    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="-17.5 -17.5 100 125" enable-background="new -17.5 -17.5 100 100" xml:space="preserve"><path d="M50.264,45.461V1.972c0-9.795-7.969-17.764-17.764-17.764S14.736-7.823,14.736,1.972v43.489  C6.124,46.682-0.527,54.083-0.527,63.027c0,9.796,7.969,17.765,17.764,17.765c6.492,0,12.165-3.511,15.264-8.724  c3.1,5.213,8.772,8.724,15.264,8.724c9.795,0,17.764-7.969,17.764-17.765C65.527,54.083,58.876,46.682,50.264,45.461z M32.5,53.987  c-2.693-4.529-7.332-7.757-12.764-8.526V8.696c4.105,1.662,8.434,2.5,12.764,2.5s8.658-0.838,12.764-2.5v36.765  C39.832,46.23,35.193,49.458,32.5,53.987z M30-10.543v4.894c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-4.894  c5.845,1.166,10.264,6.332,10.264,12.515v1.25c-8.092,3.949-17.436,3.949-25.527,0v-1.25C19.736-4.211,24.155-9.377,30-10.543z   M17.236,75.792c-7.038,0-12.764-5.727-12.764-12.765s5.726-12.764,12.764-12.764S30,55.989,30,63.027S24.274,75.792,17.236,75.792z   M47.764,75.792C40.726,75.792,35,70.065,35,63.027s5.726-12.764,12.764-12.764s12.764,5.726,12.764,12.764  S54.802,75.792,47.764,75.792z"/></svg>',
]

if (currentLevelData.bestScore !== 0) {
    gameBestScore.innerHTML = `3. Лучший результат: ${progress[currentLevel - 1].bestScore}`
}

nextLvlBtnActive()

let score = 0
let finalScore = 0
let timerId = null


gameTime.innerHTML = `1. Время игры: ${currentLevelData.gameTime} секунд`
gameClicks.innerHTML = `2. Количество кликов: ${currentLevelData.neededScore}`

function startTimer(seconds) {
    if (timerId !== null) return

    let timeLeft = seconds

    timerId = setInterval(() => {
        gameTimer.innerHTML = timeLeft

        timeLeft--
        gameActive = true

        if (timeLeft < 0) {
            clearInterval(timerId)
            timerId = null
            gameActive = false
            finalScore = score - 1
            gameTimer.innerHTML = `Ваш счет: ${finalScore}`
            score = 0
            if (finalScore > currentLevelData.bestScore) {
                progress[currentLevel - 1].bestScore = finalScore
                saveProgress(progress)
            }
            
            if (finalScore >= currentLevelData.neededScore) {
                progress[currentLevel - 1].isLevelCompleted = true
                saveProgress(progress)
            }
            finalScore = 0
            
            if (currentLevelData.bestScore !== 0) {
                gameBestScore.innerHTML = `3. Лучший результат: ${progress[currentLevel - 1].bestScore}`
            }
            
            nextLvlBtnActive()
            console.log(score)
            
        }
    }, 1000)
}


startGameBtn.addEventListener('click', function () {
    startTimer(currentLevelData.gameTime)
})

game()

function game() {
    gameIcon.addEventListener('click', () => {
        if (!gameActive) return
        score++

        let huyubikColorR = Math.floor(Math.random() * 256)
        let huyubikColorG = Math.floor(Math.random() * 256)
        let huyubikColorB = Math.floor(Math.random() * 256)
        let huyubikTop = Math.floor(Math.random() * 260)
        let huyubikLeft = Math.floor(Math.random() * 260)
        let huyubikW = russelCrasava(currentLevelData.sizeMin, currentLevelData.sizeTop)

        gameIcon.innerHTML = icons[russelCrasava(0, icons.length - 1)]
        gameIcon.style.fill = `rgb(${huyubikColorR}, ${huyubikColorG}, ${huyubikColorB})`
        gameIcon.style.top = `${huyubikTop}px`
        gameIcon.style.left = `${huyubikLeft}px`
        gameIcon.style.width = `${huyubikW}px`
        gameIcon.style.backgroundColor = 'black'
    })
}

function russelCrasava(min, max) {
    let num = Math.floor(Math.random() * (max + 1 - min) + min)
    return num
}