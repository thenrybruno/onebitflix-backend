import express from 'express'
import { sequelize } from './database'
import { adminJs, adminJsRouter } from './adminJs'
import { router } from './routes'

const app = express()

app.use(express.static('public'))

app.use(express.json())

app.use(adminJs.options.rootPath, adminJsRouter)

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    sequelize.authenticate().then(() =>{
        console.log('DB conection sucessfull')
    })
    console.log(`Server started sucessfull at port ${PORT}`)
})