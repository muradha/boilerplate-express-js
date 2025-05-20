import express from "express";
import cors from "cors";
import userRoutes from "@features/users/routes";
import errorHandler from "@common/middleware/errorHandler";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.use(errorHandler);

app.listen(3000, () => console.log("Server ready"));
