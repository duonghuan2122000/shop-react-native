export const required = (string) => {
    return (string === undefined || string === null || string === '' || string.length === 0) ? false : true;
}

export const minLength = (string, num) => {
    return (required(string) && string.length >= parseInt(num));
}

export const maxLength = (string, num) => {
    return (required(string) && string.length <= parseInt(num));
}

export const isPhoneNumber = (string) => {
    return required(string) && /^0\d{9}/.test(string);
}

export const isEmail = (string) => {
    return required(string) && /^(.+)@(.+)/.test(string);
}

export const isEqual = (str1, str2) => {
    return required(str1) && required(str2) && str1 === str2;
}