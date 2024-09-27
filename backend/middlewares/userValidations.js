const { body } = require("express-validator");

// array with data user-validation
const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres."),

    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório.")
      .isEmail()
      .withMessage("Insira um e-mail válido"),
    
      body("password")
      .isString()
      .withMessage("A password é obrigatória.")
      .isLength({ min: 5 })
      .withMessage("A password precisa de no mínimo 5 caracteres."),
    
      body("confirmPassword")
      .isString()
      .withMessage("A confirmação de password é obrigatória.")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As passwords não coincidem.");
        }
        return true;
      }),
  ];
};



module.exports = {
  userCreateValidation,
};