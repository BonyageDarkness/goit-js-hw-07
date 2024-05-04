const categor = document.querySelector('#categories');
console.log(`Numbers of categories: ${categor.children.length}`);

const categorAll = document.querySelectorAll('#categories .item');
categorAll.forEach((item) => {
    const categoryList = item.querySelector('h2').textContent;
    const elementsLength = item.querySelectorAll('li').length;
    console.log(`Category: ${categoryList}`);
    console.log(`Elements: ${elementsLength}`);
});

// const el1 = document.querySelector('.item');
// const el1Name =
//     `${el1.childNodes[1].textContent}: ` + `${el1.children[1].children.length}`;
// console.log(el1Name);
