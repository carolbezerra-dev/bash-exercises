// RESOLUÇÃO DO GABARITO PARA CONSULTA POSTERIOR
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env; // é como se fosse o secret da aula

const validateBody = (body) =>
  /* Utilizamos o Joi para validar o schema do body */
  Joi.object({
    username: Joi.string().min(5).alphanum().required(),
/* Para que username seja válido, seu valor precisa ser uma string alfanumérica de, pelo menos, 5 caracteres */
    password: Joi.string().min(5).required(),
// Para que password seja válido, seu valor precisa ser uma string de, pelo menos, 5 caracteres.
  }).validate(body);

module.exports = async (req, res, next) => {
  /* Construímos um schema do Joi */
  const { error } = validateBody(req.body);

  /* Caso ocorra erro na validação do Joi, passamos esse
     erro para o express, que chamará nosso middleware de erro */
  if (error) return next(error);

  // Se o login for admin e a senha estiver incorreta
  if (req.body.username === 'admin' && req.body.password !== 's3nh4S3gur4???') {
    /* Criamos um novo objeto de erro */
    const err = new Error('Invalid username or password');
    /* Adicionamos o status `401 Unauthorized` ao erro */
    err.statusCode = 401;
    /* Passamos o erro para o express, para que seja tratado pelo middleware de erro */
    return next(err);
  }

   /* Definimos admin como true se username e password estiverem corretos */
   const admin = req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';

// 2. Caso username e password sejam válidos, retorne um token que atenda às seguintes especificações:
  const payload = {
    username: req.body.username, // - Contém, no payload, o nome de usuário informado na request
    admin,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h', // - Expira em uma hora;
  });

  res.status(200).json({ token });
};



