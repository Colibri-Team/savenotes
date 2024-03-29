const express = require('express');
const path = require('path');
const connect = require('./config/db')
const exphbs = require('express-handlebars');
const Passportjs = require('./config/passport')
const passport = require('passport');
const session = require('express-session')
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session)
const methodOverride = require('method-override');
const dotenv = require('dotenv');
dotenv.config({path:'./config/keys.env'})
const app = express();


// Passport
app.use(express.urlencoded({extended:false}))
app.use(express.json())



//method override
app.use(methodOverride('_method'))



//Handlebars setting
app.engine('.hbs', exphbs({defaultLayout:'main',extname:'.hbs'}))
app.set('view engine', '.hbs')

// Session
app.use(
    session({
        secret:process.env.SESSION_SECRET,
        resave:false,
        saveUninitialized:false,
        cookie:null,
        store: new MongoStore({mongooseConnection:mongoose.connection})
    })
)
app.use(passport.initialize());
app.use(passport.session());

// Static files
app.use(express.static(path.join(__dirname, '/Static')))

//Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/notes', require('./routes/notes'))
app.get("*", (req, res)=>{
    res.render('404', {layout: false})
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log('Server is running', PORT)
})