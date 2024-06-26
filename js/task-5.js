function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const bodyColor = document.querySelector('body');

const leftClick = () => {
    const randomColor = getRandomHexColor();
    spanColor.style.backgroundColor = randomColor;
    bodyColor.style.backgroundColor = randomColor;
};

button.addEventListener('click', leftClick);
