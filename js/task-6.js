function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const box = document.querySelector('#boxes');
const container = document.querySelector('#controls');

const createBoxes = (amount) => {
    let size = 30;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
        const color = getRandomHexColor();
        const div = document.createElement('div');
        div.style.height = `${size}px`;
        div.style.width = `${size}px`;
        div.style.backgroundColor = color;
        fragment.appendChild(div);
        size += 10;
    }
    box.appendChild(fragment);
};

createBtn.addEventListener('click', () => {
    const item = parseInt(input.value);
    if (!isNaN(item) && item >= 1 && item <= 100) {
        createBoxes(item);
        input.value = '';
    }
});

destroyBtn.addEventListener('click', () => {
    box.innerHTML = '';
});

container.style.margin = '32px';
container.style.display = 'flex';
container.style.gap = '16px';

input.style.display = 'flex';
input.style.padding = '8px 72px';
input.style.flexDirection = 'column';
input.style.justifyContent = 'center';
input.style.alignItems = 'center';
input.style.gap = '10px';
input.style.borderRadius = '8px';
input.style.border = '1px solid #808080';

destroyBtn.style.display = 'flex';
destroyBtn.style.width = '120px';
destroyBtn.style.padding = '8px 16px';
destroyBtn.style.justifyContent = 'center';
destroyBtn.style.alignItems = 'center';
destroyBtn.style.gap = '10px';
destroyBtn.style.borderRadius = '8px';
destroyBtn.style.background = '#FF4E4E';

createBtn.style.display = 'flex';
createBtn.style.width = '120px';
createBtn.style.padding = '8px 16px';
createBtn.style.justifyContent = 'center';
createBtn.style.alignItems = 'center';
createBtn.style.gap = '10px';
createBtn.style.borderRadius = '8px';
createBtn.style.background = '#4E75FF';

box.style.display = 'flex';
box.style.gap = '44px';
box.style.flexDirection = 'row';
box.style.flexWrap = 'wrap';
