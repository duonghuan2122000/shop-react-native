export const required = (string) => {
    string = string.toString();
    return (string === undefined || string === null || string === '' || string.length === 0) ? false : true;
}

export const minLength = (string, num) => {
    return (required(string) && string.length >= parseInt(num));
}

export const maxLength = (string, num) => {
    return (required(string) && string.length <= parseInt(num));
}

export const isPhoneNumber = (string) => {
    return required(string) && string.test(/^0\d{9}/);
}

export const isEmail = (string) => {
    return required(string) && string.test(/^(.+)@(.+)/);
}

export const isEqual = (str1, str2) => {
    return required(str1) && required(str2) && str1 === str2;
}