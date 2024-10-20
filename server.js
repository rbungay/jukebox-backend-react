
import db from "./db/connection.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import logger from "morgan";
dotenv.config();
import trackRouter from "./routes/tracks.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(logger("dev"));


//Routes Here
app.use("/tracks", trackRouter);


db.on("connected", () => {
    console.clear()
    console.log(chalk.blue("Connected to MongoDB!"));
    app.listen(PORT, () => {
      console.log(`Express server running on port: ${PORT}`);
    });
})

