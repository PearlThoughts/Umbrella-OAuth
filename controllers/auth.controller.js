const axios = require('axios');
const {
    umbrellaApiKey,
    umbrellaApiSecret,
    umbrellaTokenUrl
} = require('../config/vars');
const basicToken = Buffer.from(`${umbrellaApiKey}:${umbrellaApiSecret}`).toString('base64');
const headers = {
    Authorization: `Basic ${basicToken}`
};

/**
 * Token
 * @public
 */
exports.token = async (req, res, next) => {
    try {
        const response = await axios.get(umbrellaTokenUrl, { headers });

        return res.json({ accessToken: response.data });
    } catch (error) {
        return res.json({ error: error.message });
    }
};
