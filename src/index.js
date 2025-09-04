import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/galleryroute.js";

dotenv.config({
	path: "./.env",
});

const app = express();
const PORT = process.env.PORT || 5000;

// const corsOptions = {
// 	origin : "https://anvithaclubglbajaj.netlify.app",
// 	optionsSuccessStatus: 200
//}

// const allowedOrigins = [
// 	"https://anvithaclubglbajaj.netlify.app",
// 	"http://localhost:8080",
// 	"http://localhost:5173",
// 	"http://172.19.80.1:8080",
// 	"http://192.168.29.203:8080",
// // ];

// const corsOptions = {
// 	origin: (origin, callback) => {
// 		if (!origin || allowedOrigins.includes(origin)) {
// 			callback(null, true);
// 		} else {
// 			callback(new Error("Not allowed by CORS"));
// 		}
// 	},
// 	optionsSuccessStatus: 200,
// };

app.use(cors({origin:"*"}));

app.use(express.json());

app.use("/api/gallery", router);

app.listen(PORT, () => {
	console.log(`The server is running on port: ${PORT}`);
});
