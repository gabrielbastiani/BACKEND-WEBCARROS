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
import { UserListAllCarsHomeController } from "./controllers/car/UserListAllCarsHomeController";
import { DeleteCarUserController } from "./controllers/car/DeleteCarUserController";
import { FindUniqueCarController } from "./controllers/car/FindUniqueCarController";




const router = Router();
const upload = multer(uploadConfig.upload("./images"));



// -- USERS -- //
router.post('/create_user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

// -- CARS -- //
router.post('/create_car', isAuthenticated, upload.array('files', 15), new CreateNewCarController().handle);
router.get('/list_all_cars_home', new ListAllCarsHomeController().handle);
router.get('/user_cars', isAuthenticated, new UserListAllCarsHomeController().handle);
router.delete('/delete_car_user', isAuthenticated, new DeleteCarUserController().handle);
router.get('/car_details_home', new FindUniqueCarController().handle);


export { router }