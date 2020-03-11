const express = require('express');
const app = express();
const path = require('path');


// Settings
app.set('port' , process.env.PORT || 3500);

// Static Files
app.use(express.static('public'));

// Starting Server
app.listen(app.get('port') , () => {
    console.log('Server Started on Port -> ' + app.get('port'));
});