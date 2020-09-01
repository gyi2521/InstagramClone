const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;
mongoose.set('useCreateIndex', true);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//Migrating from mlab to MongoDBAtlas---mongoose.connect('mongodb://user:password3@ds023478.mlab.com:23478/heroku_wb8x471d', { useNewUrlParser: true });
//mongoose.connect('mongodb://localhost/instagram',{ useNewUrlParser: true });
mongoose.connect('mongodb+srv://gyi:NamJee01@clusterinstagram.odqm0.mongodb.net/instagramClone?retryWrites=true&w=majority');

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});

