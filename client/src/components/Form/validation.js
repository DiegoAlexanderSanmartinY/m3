

const validation = (userData) => {
    const validationUsername = (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
    let errors = {};
    if(!(validationUsername.test(userData.username))) {
        errors.username = 'El email es invalido';
    }
    if(!userData.username) {
        errors.username = 'El email no puede estar vacío';
    }
    if((userData.username.length) > 35) {
        errors.username = 'El email no puede tener mas de 35 caracteres';
    }
    if(!userData.password.match(/\d/)) {
        errors.password = 'La contraseña debe de contener al menos un número';
    }
    if(userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'La contraseña debe de contener entre 6 y 10 caracteres';
    }
    return errors;
}

export default validation;