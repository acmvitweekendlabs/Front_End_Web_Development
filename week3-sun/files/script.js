const form = document.getElementById('my-form');
// console.log(form);
let name, email, msg;
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    msg = document.querySelector('.error-msg');
    if(name==='' || email==='') {
        // alert('Incomplete form');
        msg.textContent = 'Incomplete Form';
        msg.classList.add('error');
    }
    else {
        msg.textContent = 'Success';
        msg.classList.add('success');
    }
})