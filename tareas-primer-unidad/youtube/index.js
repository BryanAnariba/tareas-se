const express = require('express');
const app  = express();

// Settings
app.set('port' , process.env.PORT ||3500);


// Static files
app.use(express.static('public'));

app.listen(app.get('port') , () => {
    console.log('Server Started On Port -> ' + app.get('port'));
});