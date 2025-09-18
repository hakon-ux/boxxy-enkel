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

// Route for bestilling page (now backup)
app.get('/bestilling', (req, res) => {
    res.sendFile(path.join(__dirname, 'backup.html'));
});

// Route for backup page
app.get('/backup', (req, res) => {
    res.sendFile(path.join(__dirname, 'backup.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Boxxy server kjører på:`);
    console.log(`  Local:   http://localhost:${PORT}`);
    console.log(`  Network: http://10.0.0.36:${PORT}`);
});