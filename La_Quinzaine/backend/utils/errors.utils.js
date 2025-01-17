module.exports.signUpErrors = (err) => {
    let errors = { pseudo: "", email: "", password: "" };

    if (err.message.includes("pseudo"))
        errors.pseudo = "Pseudo incorrect ou déjà pris";

    if (err.message.includes("email")) errors.email = "Email incorrect";

    if (err.message.includes("password"))
        errors.password = "Le mot de passe doit faire 6 caractères minium";

    return errors;
}

module.exports.signInErrors = (err) => {
    let errors = { pseudo: "", password: "" };

    if (err.message.includes("email")) errors.pseudo = "Pseudo inconnu";

    if (err.message.includes("password"))
        errors.password = "Le mot de passe ne correspond pas";

    return errors;
}