import db from "./db/connection.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import logger from "morgan";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
