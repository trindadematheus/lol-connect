const { authenticate } = require("league-connect")

const authenticateLOL = async (req, res, next) => {
  try {
    const credentials = await authenticate()
    req.credentials = credentials

    return next();
  } catch (error) {
    return res.status(400).json({ error: 'Verifique se o Client do League of Legends está inicializado e tente novamente.' });
  }
}

module.exports = authenticateLOL