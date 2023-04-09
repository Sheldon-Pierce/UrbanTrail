// import dotenv from 'dotenv';

import express from 'express';

// dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.Port || 5000

app.listen(port, () => {
    console.log(`Server runs on port ${port}`);
});