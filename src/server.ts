import express, { Request, Response } from 'express';
import { users, User } from './Model/userModel';
import { userRoutes } from './Routes/userRoutes';

const app = express()
const port = 3000

app.use(express.json())
app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})