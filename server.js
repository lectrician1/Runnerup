const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.static('./pages'))

app.listen(port, () => console.log(`App listening on port ${port}!`))
 
