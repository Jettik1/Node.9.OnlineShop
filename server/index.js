require('dotenv').config();
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload')

const app = express();
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

// Последний middleware с ошибкой
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server working on port: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();

