import express from "express";
import categoriesRouter from "./routes/categories.routes.js";
import cors from "cors";

import {config} from "dotenv";

config();

const app = express();

app.set('port', 3000);
app.use(cors("*"));
app.use('/api/category', categoriesRouter);

app.listen(app.get('port'), () => {
    console.log(`App running at port ${app.get('port')}`);
});