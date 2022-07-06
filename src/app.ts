import "reflect-metadata";
import express from "express";
import userRouters from "./routers/user.routers";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/users", userRouters);

app.listen(port, () => {
  console.log(`Server running in port: ${port}! 🚀`);
  
});