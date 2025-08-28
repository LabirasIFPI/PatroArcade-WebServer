import { NextFunction, Request, Response } from "express";

const setSecurityHeaders = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //   console.log("Setting security headers");
  //   res.setHeader(
  //     "Content-Security-Policy",
  //     "connect-src 'self' https://vercel.live https://patroarcadeserver.onrender.com"
  //   );
  // teste
  next();
};

export { setSecurityHeaders };
