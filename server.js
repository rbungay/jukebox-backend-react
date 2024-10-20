import db from "./db/connection.js"// let db = mongoose.connection
import express from "express";
import logger from "morgan";
import chalk from "chalk";
import dotenv from "dotenv"
dotenv.config();
import trackRouter from "./routes/tracks.js"
import cors from "cors";
const app = express()
const PORT = process.env.PORT || 3000
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

