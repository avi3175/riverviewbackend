import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./app/routes";
// import router from "./app/routes/index";


import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { notFound } from "./app/middlewares/notFound";



dotenv.config();

const app = express();

// app.use(cors());

// Use this configuration:
// app.use(cors({
//   origin: 'http://localhost:3000', // Your Next.js frontend URL
//   credentials: true, // Allow cookies/authorization headers
//   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));


app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://riversidefrontend.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.use(express.json());


app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Riverside API is running 🚀"
  });
});

app.use(notFound);
app.use(globalErrorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});