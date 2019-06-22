// Declare dependencies, variables and constants
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(favicon(__dirname + '/public/assets/images/favicon.png'));

require('./routing/htmlRoutes.js')(app);
require('./routing/apiRoutes.js')(app);

app.listen(PORT, function(){
  console.log(`Connected at PORT:${PORT}`);
});
