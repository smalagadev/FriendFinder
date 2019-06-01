// Declare dependencies, variables and constants
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(favicon(__dirname + '/app/public/assets/images/favicon.png'));

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, function(){
  console.log(`Connected at PORT:${PORT}`);
});
