const express = require('express');

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 * /topics:
 *  get:
 *    summary: Get info about the logged in user
 *    description:
 *      Returns information about the logged in user.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      401:
 *        description: If the user is not logged in
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message:
          'The user is not logged in. Please add Authorization: Bearer TOKEN to the headers.',
      });
    }

    // Ensure this request is never cached
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');

    res.json({
      user: req.user,
    });
  } catch (e) {
    next();
  }
});

module.exports = router;
