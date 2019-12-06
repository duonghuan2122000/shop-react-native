import global from './global';
import handleErrors from './handleErrors';
export default (key) => (
    fetch(`${global.baseUrl}/search.php?key=${key}`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
    .then(handleErrors)
    .then(res => res.json())
);