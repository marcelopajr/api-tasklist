import { Router } from "express";

import authMiddleware from "./app/middlewares/auth";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import TaskController from "./app/controllers/TaskController";

const routes = new Router();

routes.post("/users", UserController.store);

routes.post("/sessions", SessionController.store);

// Check token to all routes below
routes.use(authMiddleware);

routes.put("/users", UserController.update);

routes.get("/tasks", TaskController.index);

routes.post("/tasks", TaskController.store);

export default routes;
