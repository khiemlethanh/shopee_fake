const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path') ;
const methodOverride = require('method-override')
const app = express();
const port = process.env.PORT || 5000;

const route = require('./routes');
const db = require('./config/db/index');

// connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended:true
})) 
app.use(express.json());
app.use(methodOverride('_method'))

app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});