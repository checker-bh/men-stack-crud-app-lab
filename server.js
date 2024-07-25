// Import Modules
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');

// Database
require('./config/database.js');

// Controllers
const clothingCtrl = require('./controllers/clothing.js');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Set view engine to ejs
app.set('view engine', 'ejs');
// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', clothingCtrl.index);
app.get('/clothing', clothingCtrl.clothingIndex);
app.get('/clothing/new', clothingCtrl.clothingNew);
app.post('/clothing', clothingCtrl.clothingCreate);
app.get('/clothing/:clothingId', clothingCtrl.clothingShow);
app.get('/clothing/:clothingId/edit', clothingCtrl.clothingEdit);
app.put('/clothing/:clothingId', clothingCtrl.clothingUpdate);
app.delete('/clothing/:clothingId', clothingCtrl.clothingDelete);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
