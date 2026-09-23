import { Request, Response, NextFunction } from "express";

export const auth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header("Authorization");

  if (token === "super-secret-key") {
    next(); // allow the request to continue
    return;
  }

  res.status(401).json({
    message: "Unauthorized",
  });
};