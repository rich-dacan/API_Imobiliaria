import "reflect-metadata";
import "express-async-errors";
import express from "express";

import handleAppErrorMiddleware from "./middlewares/handleAppError.middleware";

import userRouters from "./routers/user.router";
import sessionRoutes from "./routers/session.routes";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/users", userRouters);
app.use("/login", sessionRoutes);

app.use(handleAppErrorMiddleware);

app.listen(port, () => {
  console.log(`Server running in port: ${port}! 🚀`);
  
});