const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Esto está funcionando")
});

app.listen(3000, () => {
    console.log("server on")
})