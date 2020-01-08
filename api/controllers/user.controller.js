/**
 * Test user
 * @public
 */
exports.test = (req, res, next) => {
    res.json({ message: 'Hello world!' });
};

exports.auth = (req, res, next) => {
    res.json({ message: 'Hello Auth!' });
};
