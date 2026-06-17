"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./app/routes"));
// import router from "./app/routes/index";
const globalErrorHandler_1 = require("./app/middlewares/globalErrorHandler");
const notFound_1 = require("./app/middlewares/notFound");
dotenv_1.default.config();
const app = (0, express_1.default)();
// app.use(cors());
// Use this configuration:
// app.use(cors({
//   origin: 'http://localhost:3000', // Your Next.js frontend URL
//   credentials: true, // Allow cookies/authorization headers
//   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://riversidefrontend.vercel.app",
        "https://riverviewbackend.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express_1.default.json());
app.use("/api/v1", routes_1.default);
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Riverside API is running 🚀"
    });
});
app.use(notFound_1.notFound);
app.use(globalErrorHandler_1.globalErrorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
