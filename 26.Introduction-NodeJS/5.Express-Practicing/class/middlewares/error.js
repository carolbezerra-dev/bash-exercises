const errorMiddleware = (err, _req, res, next) => { // 4 parâmetros caracteriza um Middleware de erro
  if (err.status) res.status(err.status).send({ error: err.message });
  
  res.status(500).send({ error: err.message });
  // status 500 é erro de servidor, de código
  next();
};

module.exports = errorMiddleware;
