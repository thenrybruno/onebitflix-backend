import express from 'express'
import { sequelize } from './database'
import { adiminJs, adminJsRouter } from './adminJs'

const app = express()

app.use(express.static('public'))

app.use(adiminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    sequelize.authenticate().then(() =>{
        console.log('DB conection sucessfull')
    })
    console.log(`Server started sucessfull at port ${PORT}`)
})