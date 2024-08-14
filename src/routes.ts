import { Router } from "express";
import multer from 'multer';
import uploadConfig from './config/multer';
import { isAuthenticated } from "./middlewares/isAuthenticated";

// -- USERS -- //
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

// -- CARS -- //
import { CreateNewCarController } from "./controllers/car/CreateNewCarController";
import { ListAllCarsHomeController } from "./controllers/car/ListAllCarsHomeController";




const router = Router();
const upload = multer(uploadConfig.upload("./images"));



// -- USERS -- //
router.post('/create_user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

// -- CARS -- //
router.post('/create_car', isAuthenticated, upload.array('files', 15), new CreateNewCarController().handle);
router.get('/list_all_cars_home', new ListAllCarsHomeController().handle);


export { router }