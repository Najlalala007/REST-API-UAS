const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Route = require('./Routes/route');
const usersRoute = require('./Routes/usersRoute');
const validationMiddleware = require('./middlewares/validationMiddleware'); // Assuming you've named your middleware file validationMiddleware.js

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Middleware for validating JWT
app.use(validationMiddleware.validateToken);

// Include laguku routes
app.use('/api', lagukuRoutes);

// Include users routes
app.use('/api', usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
