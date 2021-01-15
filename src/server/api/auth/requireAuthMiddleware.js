/**
 * A middleware that checks for the user set on the req. If it isn't present,
 * responds with 401.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
function requireAuthMiddleware(req, res, next) {
  if (!req.user) {
    return res.status(401).json({
      message: 'A valid Authorization header must be provided',
    });
  }

  next();
}

module.exports = requireAuthMiddleware;
