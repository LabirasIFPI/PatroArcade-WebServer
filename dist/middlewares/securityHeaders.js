"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSecurityHeaders = void 0;
const setSecurityHeaders = (req, res, next) => {
    //   console.log("Setting security headers");
    //   res.setHeader(
    //     "Content-Security-Policy",
    //     "connect-src 'self' https://vercel.live https://patroarcadeserver.onrender.com"
    //   );
    // teste
    next();
};
exports.setSecurityHeaders = setSecurityHeaders;
