const express = require('express');
const cors = require('cors');
const { default: rateLimit } = require('express-rate-limit');
require('dotenv').config()

const PORT = process.env.PORT || 5000;

const app = express();
//ratelimit
const limiter  = rateLimit({
    windowMs: 10 * 60 * 1000, //10mins
    max: 75,
})

app.use(limiter)
app.set('trust proxy', 1)


// set static folder
app.use(express.static('public'))

//route
app.use('/api', require('./routes'))

//enable cors
app.use(cors())

app.listen(PORT, () => console.log(`server runing on port ${PORT}`))