import { Request, Response, NextFunction } from "express";

export const validate =
  (requiredFields: string[]) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const missingFields = requiredFields.filter(
      (field) => req.body[field] === undefined
    );

    if (missingFields.length > 0) {
      res.status(400).json({
        message: "Bad Request",
        missingFields,
      });
      return;
    }

    next();
  };