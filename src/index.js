const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/static'));

try {
    app.listen(3000, () => console.log('Listening on port 3000'));
    
} catch (err) {
    console.error(err);
    process.exit(1);
}