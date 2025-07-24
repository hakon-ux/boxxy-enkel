const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Route for main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for bestilling page
app.get('/bestilling', (req, res) => {
    res.sendFile(path.join(__dirname, 'bestilling.html'));
});

app.listen(PORT, () => {
    console.log(`Boxxy server kjører på http://localhost:${PORT}`);
});