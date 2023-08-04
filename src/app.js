import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routers';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

router(app);

export default app;
