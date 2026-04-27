const nextLvlBtn = document.querySelector('.next-lvl')

const gameProgress = [
    {
        levelNum: 1,
        neededScore: 22,
        sizeMin: 60,
        sizeTop: 80,
        gameTime: 20,
        bestScore: 0,
        isLevelCompleted: false,
    },
    {
        levelNum: 2,
        neededScore: 12,
        sizeMin: 60,
        sizeTop: 80,
        gameTime: 8,
        bestScore: 0,
        isLevelCompleted: false,
    },
    {
        levelNum: 3,
        neededScore: 15,
        sizeMin: 60,
        sizeTop: 80,
        gameTime: 10,
        bestScore: 0,
        isLevelCompleted: false,
    },
    {
        levelNum: 4,
        neededScore: 12,
        sizeMin: 40,
        sizeTop: 60,
        gameTime: 10,
        bestScore: 0,
        isLevelCompleted: false,
    },
    {
        levelNum: 5,
        neededScore: 25,
        sizeMin: 40,
        sizeTop: 60,
        gameTime: 20,
        bestScore: 0,
        isLevelCompleted: false,
    },
    {
        levelNum: 6,
        neededScore: 14,
        sizeMin: 40,
        sizeTop: 60,
        gameTime: 10,
        bestScore: 0,
        isLevelCompleted: false,
    },
    {
        levelNum: 7,
        neededScore: 10,
        sizeMin: 40,
        sizeTop: 60,
        gameTime: 6,
        bestScore: 0,
        isLevelCompleted: false,
    },
    {
        levelNum: 8,
        neededScore: 18,
        sizeMin: 20,
        sizeTop: 40,
        gameTime: 15,
        bestScore: 0,
        isLevelCompleted: false,
    },
    {
        levelNum: 9,
        neededScore: 20,
        sizeMin: 20,
        sizeTop: 40,
        gameTime: 16,
        bestScore: 0,
        isLevelCompleted: false,
    },
    {
        levelNum: 10,
        neededScore: 100,
        sizeMin: 20,
        sizeTop: 40,
        gameTime: 80,
        bestScore: 0,
        isLevelCompleted: false,
    },

]

const progress = getProgress()

function saveProgress(data) {
    localStorage.setItem('gameProgress', JSON.stringify(data));
}

// Получаем текущий уровень из URL
const currentPage = window.location.pathname;
const currentLevel = Number(currentPage.match(/\d+/)[0] - 1);

// Загружаем прогресс
function getProgress() {
    return JSON.parse(localStorage.getItem('gameProgress')) || gameProgress;
}

let currentLevelData = progress.find(item => item.levelNum === currentLevel)

function nextLvlBtnActive () {
    if (progress[currentLevel - 1].isLevelCompleted) {
        nextLvlBtn.innerHTML = 'Следущий уровень'
        nextLvlBtn.classList.add('active')
        nextLvlBtn.href = `../levels/level${currentLevel + 1}.html`
    } else if(nextLvlBtn.innerHTML !== 'Следущий уровень'){
        nextLvlBtn.innerHTML = 'На главную'
        nextLvlBtn.classList.add('active')
        nextLvlBtn.href = '../index.html'
    }
}