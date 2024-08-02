import { Router } from "express";
import multer from 'multer';
import uploadConfig from './config/multer';
import { isAuthenticated } from "./middlewares/isAuthenticated";




const router = Router();
const upload = multer(uploadConfig.upload("./images"));





export { router }