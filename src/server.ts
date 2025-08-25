import express, { Request, Response } from 'express';
import { users, User } from './Model/userModel';
import { userRoutes } from './Routes/userRoutes';
import { productRoutes } from './Routes/productRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/product', productRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})