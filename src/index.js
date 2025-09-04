import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import router from "./routes/galleryroute.js";
import { origin } from "./middlewares/origin.js";

dotenv.config({
	path: "./.env",
});

const app = express()
const PORT = process.env.PORT || 5000;


const corsOptions = {
	origin : "https://anvithaclubglbajaj.netlify.app",
	optionsSuccessStatus: 200
}

app.use(express.json())

app.use(cors(corsOptions))

app.use(origin);

app.use("/api/gallery",router)

app.listen(PORT, ()=>{
	console.log(`The server is running on port: ${PORT}`)
})