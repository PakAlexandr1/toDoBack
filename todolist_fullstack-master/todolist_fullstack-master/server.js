const express = require('express');
const app = express();
const routes = require('./routes');
require('dotenv').config();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

const { connectToDb } = require('./database/connectToDb');
connectToDb();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});