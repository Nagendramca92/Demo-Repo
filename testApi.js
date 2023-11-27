const express = require('express');

const app = express();
const port = 5500;

app.listen(port, () => {
    console.log("app listen at port no : " + port);
})

app.get('/hello', (req, res) => {

    res.send("Get request received");

})