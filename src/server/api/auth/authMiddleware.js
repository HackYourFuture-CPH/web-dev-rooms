function authMiddleware(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split('Bearer ')[1];
    // TODO: use jwt here
    switch (token) {
      case 'student':
        req.user = {
          id: 1,
          type: 'student',
        };
        break;

      case 'mentor':
        req.user = {
          id: 101,
          type: 'mentor',
        };
        break;

      case 'admin':
        req.user = {
          id: 1001,
          type: 'admin',
        };
        break;

      default:
        // TODO: real auth with Slack here
        break;
    }
  }

  next();
}

module.exports = authMiddleware;
