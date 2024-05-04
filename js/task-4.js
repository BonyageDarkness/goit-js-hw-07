const registerForm = document.querySelector('form');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value;
    const password = form.elements.password.value;
    if (login === '' || password === '') {
        return console.log('All form fields must be filled in');
    }
    console.log(`Login: ${login}, Password: ${password}`);
    form.reset();
});

// const form = event.target;
// const login = form.elements.login.value;
// const password = form.elements.password.value;

// if (login === '' || password === '') {
//     return console.log('Please fill in all the fields!');
// }

// console.log(`Login: ${login}, Password: ${password}`);
