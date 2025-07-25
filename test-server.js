const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('<h1>Test Server Works!</h1>');
});

app.listen(PORT, () => {
    console.log(`Test server running on http://localhost:${PORT}`);
});