/**
 * OAuth callback
 * @public
 */
exports.oauth = (req, res, next) => {
    res.json({ status: true });
};
