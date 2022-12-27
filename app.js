const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.send('Not found!!!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});