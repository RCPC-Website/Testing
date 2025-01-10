const express = require ('express');

server = express()

server.get('/', (req, res) => {
    console.log("jacobs furniture store");
    res.status(200).json({
        success: true,
        message: 'recs server is online'
    });
});

server.listen(5000, () => {
    console.log("server is live");
});

