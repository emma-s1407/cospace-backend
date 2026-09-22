import express, { type Request, type Response } from "express";

const app = express();
const PORT = 5000;

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ status: "active", message: "CoSpace API is running" });
});

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
