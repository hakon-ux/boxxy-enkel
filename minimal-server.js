const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('<h1>Server Works!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});