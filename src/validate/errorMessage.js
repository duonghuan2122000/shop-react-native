export const required_msg = (field) => {
    return `${field} is required`;
}

export const minLength_msg = (field, num) => {
    return `${field} must have the minimun of ${num} letters`;
}

export const maxLength_msg = (field, num) => {
    return `${field} must have the maximun of ${num} letters`;
}

export const isPhoneNumber_msg = (field) => {
    return `${field} must be a phone number`;
}

export const isEmail_msg = (field) => {
    return `${field} must be a email`;
}

export const isEqual_msg = (field, compareField) => {
    return `${field} does not match ${compareField}`;
}