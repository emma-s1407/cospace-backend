import express, { type Request, type Response } from "express";
import bookingsRouter from "./routes/bookings";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "active",
    message: "CoSpace API is running",
  });
});

app.use("/bookings", bookingsRouter);

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
});