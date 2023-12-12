
const button = document.querySelector('button');


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