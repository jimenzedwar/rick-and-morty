export default function Validation(datos) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
    const pwRegex = /^(?=.*\d).{6,10}$/
    let errors = {}
    if(!emailRegex.test(datos.email)) {
        errors.email = "Debes ingresar un email valido"
    }
    // if(datos.email.length === 0) {
    //     errors.email = "Debes ingresar un email"
    // }
    // if(datos.email.length > 35) {
    //     errors.email = "El email debe tener menos de 35 caracteres"
    // }
    if(!pwRegex.test(datos.password)) {
        errors.password = "la contraseña debe tener entre 6-10 caracteres y al menos 1 numero"
    }
    // if(datos.email.length === 0) {
    //     errors.password = "la contraseña debe tener entre 6-10 caracteres"
    
    return errors
}