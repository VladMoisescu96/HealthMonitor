const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const socket = require('socket.io');
const LocalStrategy = require('passport-local').Strategy

const { Client } = require('pg');

const app = express();

app.use(bodyParser.json());;
app.enable('trust proxy');
app.use(cookieSession({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    //secure:true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours 
  }))

app.use(passport.initialize());
app.use(passport.session());

const register = require('./routes/api/register');
app.use('/api/register', register);
const login = require('./routes/api/login');
app.use('/api/login', login);
const logout = require('./routes/api/logout');
app.use('/api/logout', logout);
const user = require('./routes/api/user');
app.use('/api/user', user);

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
client.connect();

passport.use(  
    new LocalStrategy(
      
        (username, password, done) => {

        //res.send('You are trying something');
        console.log("ana are mere");
        

        var sql = 'SELECT * FROM users WHERE username = $1';

        let user = {
            username: username,
            password: password
        };
        client.query(sql, [username], function (err, result) {
            
            if (err) {
                return done(err);
            }

            if (result.rows[0] == null) {
                done(null, false, {message: 'Incorrect username or password'})

            }
        
            if (result.rows[0].password == password) {
                
                done(null, user);
            } else {
                done(null, false, {message: 'Incorrect username or password'})
            }
        });
        
       })
  );

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});

if (process.env.NODE_ENV === 'production') {
    
    app.use(express.static(__dirname + '/public'));
    app.get(/.* /, (res, req) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

server = app.listen(port, () => console.log(`Server started on port ${port}`));

const io = socket(server);
io.on('connection', function(socket) {
    console.log("connected on socket: " + socket.id);
})

io.on("pula",function(data) {
    socket.emit("pulaa", {
        data: "pulaaaaaa"
    });
});

io.on('store-height', function(data) {

    client.query("SELECT * FROM users WHERE username = $1", [data.username], function(err, result) {
      
        if (err) {
            socket.emit("error-height", "error when getting user");
        }
    
        if (result.rows[0] == null) {
            socket.emit("error-height","User not found");
        }
    
        client.query(
            "INSERT into BODY_HEIGHT (height, date, user_id) VALUES($1, $2, $3)", [data.height, new Date(), result.rows[0].username], function(err, result) {
                socket.emit("new-height", {
                    username: result.rows[0].username,
                    value: data.height
                })
        });
    });
})