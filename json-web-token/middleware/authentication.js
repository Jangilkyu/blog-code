require('dotenv').config();
const jwt = require('jsonwebtoken');

const {
    UnauthenticatedError,
  } = require('../errors');

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenciatedError('invalid authentication');
    }
    
    // bearer 토큰 분리
    const access = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(
            access,
            `${process.env.JWT_ACCESS_SECRET}.${process.env.JWT_ACCESS_VERSION}`
        );
        // console.log(payload);
        req.user = {
            user: payload.userId,
            role: payload.role,
        };
        next();
    } catch (error) {
        // 버전이 변경되거나, 시크릿이 바뀐경우
        throw new UnauthenticatedError(error.message);
    }
};

module.exports = auth;