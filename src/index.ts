import express, { Request, Response, NextFunction } from "express";
import mongoose from "moongose";
import shortid from "shortid";
import urlModels from "./models/url.models";
import { UrlRequestBody } from "./types/url.types";

//app setup
const app = express();
app.use(express.json());

//lfg
