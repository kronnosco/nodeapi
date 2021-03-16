import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

const app = express()

//--------- INITIALIZATION --------------------

import productsRoutes from './routes/products.routes'

app.set('pkg', pkg)



// ------ MIDDLEWARE ---------
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req,res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description : app.get('pkg').description,
        version: app.get('pkg').version,
    })
})

//-------- ROUTES ----------


app.use('/products',productsRoutes)

export default app;