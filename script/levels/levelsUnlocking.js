const level1 = document.querySelector('.level1')
const level2 = document.querySelector('.level2')
const level3 = document.querySelector('.level3')
const level4 = document.querySelector('.level4')
const level5 = document.querySelector('.level5')
const level6 = document.querySelector('.level6')
const level7 = document.querySelector('.level7')
const level8 = document.querySelector('.level8')
const level9 = document.querySelector('.level9')
const level10 = document.querySelector('.level10')

const localProgress = getProgress()


if(localProgress[0].isLevelCompleted) {
    level2.classList.remove('locked')
    level2.classList.add('unlocked')
    level2.href = 'levels/level2.html'
}

if(localProgress[0].isLevelCompleted && localProgress[1].isLevelCompleted) {
    level3.classList.remove('locked')
    level3.classList.add('unlocked')
    level3.href = 'levels/level3.html'
}

if(localProgress[0].isLevelCompleted && localProgress[1].isLevelCompleted && localProgress[2].isLevelCompleted) {
    level4.classList.remove('locked')
    level4.classList.add('unlocked')
    level4.href = 'levels/level4.html'
}

if(localProgress[0].isLevelCompleted && 
    localProgress[1].isLevelCompleted && 
    localProgress[2].isLevelCompleted && 
    localProgress[3].isLevelCompleted) {

    level5.classList.remove('locked')
    level5.classList.add('unlocked')
    level5.href = 'levels/level5.html'
}

if(localProgress[0].isLevelCompleted && 
    localProgress[1].isLevelCompleted && 
    localProgress[2].isLevelCompleted && 
    localProgress[3].isLevelCompleted &&
    localProgress[4].isLevelCompleted) {
    level6.classList.remove('locked')
    level6.classList.add('unlocked')
    level6.href = 'levels/level6.html'
}

if(localProgress[0].isLevelCompleted && 
    localProgress[1].isLevelCompleted && 
    localProgress[2].isLevelCompleted && 
    localProgress[3].isLevelCompleted &&
    localProgress[4].isLevelCompleted && 
    localProgress[5].isLevelCompleted) {
    level7.classList.remove('locked')
    level7.classList.add('unlocked')
    level7.href = 'levels/level7.html'
}

if(localProgress[0].isLevelCompleted && 
    localProgress[1].isLevelCompleted && 
    localProgress[2].isLevelCompleted && 
    localProgress[3].isLevelCompleted &&
    localProgress[4].isLevelCompleted && 
    localProgress[5].isLevelCompleted && 
    localProgress[6].isLevelCompleted) {
    level8.classList.remove('locked')
    level8.classList.add('unlocked')
    level8.href = 'levels/level8.html'
}

if(localProgress[0].isLevelCompleted && 
    localProgress[1].isLevelCompleted && 
    localProgress[2].isLevelCompleted && 
    localProgress[3].isLevelCompleted &&
    localProgress[4].isLevelCompleted && 
    localProgress[5].isLevelCompleted && 
    localProgress[6].isLevelCompleted &&
    localProgress[7].isLevelCompleted) {
    level9.classList.remove('locked')
    level9.classList.add('unlocked')
    level9.href = 'levels/level9.html'
}

if(localProgress[0].isLevelCompleted && 
    localProgress[1].isLevelCompleted && 
    localProgress[2].isLevelCompleted && 
    localProgress[3].isLevelCompleted &&
    localProgress[4].isLevelCompleted && 
    localProgress[5].isLevelCompleted && 
    localProgress[6].isLevelCompleted &&
    localProgress[7].isLevelCompleted &&
    localProgress[8].isLevelCompleted) {
    level10.classList.remove('locked')
    level10.classList.add('unlocked')
    level10.href = 'levels/level10.html'
}