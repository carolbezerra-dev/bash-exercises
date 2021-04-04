const logMiddleware = (req, _res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next(); // sem isso dá erro
};

module.exports = logMiddleware;
