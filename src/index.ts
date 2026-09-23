import express, { type Request, type Response } from "express";
import bookingsRouter from "./routes/bookings";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const PORT = 5000;

app.use(express.json());

// Global middleware
app.use(logger);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "active",
    message: "CoSpace API is running",
  });
});

app.use("/bookings", bookingsRouter);

// Error handler must be registered after routes
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;

process.on("SIGTERM", () => {
  process.exit(0);
});

process.on("SIGINT", () => {
  process.exit(0);
});