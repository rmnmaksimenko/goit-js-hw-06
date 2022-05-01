const form = document.querySelector('.login-form');
const email = form.email;
const password = form.password;

form.addEventListener('submit', submit);

function submit(event) {
    event.preventDefault();
    if (!email.value || !password.value) {
        alert('Все поля в форме должны быть заполнены.')
    }
    else
    {
        const formInput = { [event.currentTarget.elements[0].value]: event.currentTarget.elements[1].value, };
        console.log(formInput);
        event.currentTarget.reset();
    }
}
