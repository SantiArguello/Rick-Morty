const regexUserName = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/

export const validate = (userData) => {
    const errors = {}

    if (!regexUserName.test(userData.username)) {
        errors.username = "Debe ser un correo electrónico";
    }
     else if (!userData.username) {
        errors.username="No puede estar vacio"
    }
    else if (userData.username < 35) {
        errors.username = "No puede tener mas de 35 caracteres"
    }
    if (!userData.password) {
        errors.password = "Debe igresar una contraseña"
    }
    else if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "Debe tener minimo 6 caracteres maximo 10";
    }
    else if (!regexPassword.test(userData.password)) {
        errors.password = "Debe tener minimo una mayuscula, una minuscula y un numero"
    }

    return errors

}

