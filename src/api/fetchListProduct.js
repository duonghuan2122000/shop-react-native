import global from './global';
import handleErrors from './handleErrors';
export default (page) => (
    fetch(`${global.baseUrl}/product_by_type.php?id_type=4&page=${page}`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'Application/json'
        }
    })
        .then(handleErrors)
        .then(res => res.json())
);