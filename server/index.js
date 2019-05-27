const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const auth = require('./routes/api/auth');
app.use('/api/auth', auth);

if (process.env.NODE_ENV === 'production') {
    
    app.use(express.static(__dirname + '/public'));
    //app.get(/.* /, (res, req) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));