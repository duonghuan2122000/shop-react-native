import global from './global';
import handleErrors from './handleErrors';
export default (name, email, password) => (
    fetch(`${global.baseUrl}/register.php`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'Application/json'
        },
        body: JSON.stringify({name, email, password})
    })
        .then(handleErrors)
        .then(res => res.text())
);