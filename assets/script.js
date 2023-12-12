
const handleSubmit = (event) => {
    event.preventDefault();

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
    });
}

document.querySelector('.contact-form form').addEventListener('submit', handleSubmit);
