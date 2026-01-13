import express from 'express';

const app = express();  // Create an Express application

app.use(express.json()); // Middleware to parse JSON request bodies


// routes import
import userRoutes from './routes/user.route.js';

// route decalaration
app.use('/api/v1/users', userRoutes);

// example route : http://localhost:4000/api/v1/users/register


export default app;
