const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const cookieParser= require('cookie-parser');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.enable('trust proxy');
app.use(session({
    secret: 'keyboard ca',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: true,
             maxAge:5184000000}
}));

app.use(cors());

const register = require('./routes/api/register');
app.use('/api/register', register);

if (process.env.NODE_ENV === 'production') {
    
    app.use(express.static(__dirname + '/public'));
    app.get(/.* /, (res, req) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));