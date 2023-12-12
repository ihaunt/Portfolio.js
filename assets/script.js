
const button = document.querySelector('button');


let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height){
            // active navbar links


            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('active');            
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)
}


const addLoading = () => {
    button.innerHTML = '<img src="img/other.img/spin.png" class="loading">';
}

const removeLoading = () => {
    button.innerHTML = 'Submit';
}

const clearForm = () => {
    document.querySelector('input[name=sender-name]').value = '';
    document.querySelector('input[name=sender-email]').value = '';
    document.querySelector('textarea[name=message]').value = '';
}

const handleSubmit = (event) => {
    event.preventDefault();

    addLoading();

    const name = document.querySelector('input[name=sender-name]').value;
    const email = document.querySelector('input[name=sender-email]').value;
    const message = document.querySelector('textarea[name=message]').value;

    fetch('https://api.sheetmonkey.io/form/jq2BvU1nSzyomuewCMA5bv', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email, message: message }),
    }).then(() => removeLoading()).then(() => clearForm())
};

document.querySelector('.contact-form form').addEventListener('submit', handleSubmit);