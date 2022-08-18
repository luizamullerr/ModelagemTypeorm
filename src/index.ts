import * as express from "express"
import usuarios from './usuarios'



const app = express()
    app.use(express.json())

    app.use("/user", usuarios)



const PORT = process.env.PORT
app.listen(PORT, () => { console.log(`Executando em http://localhost:${PORT}`)})