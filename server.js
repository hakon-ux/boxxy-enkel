const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files with proper headers
app.use(express.static(path.join(__dirname), {
    maxAge: '1h',
    etag: true
}));

// Explicitly serve CSS files with correct content type
app.use('*.css', (req, res, next) => {
    res.set('Content-Type', 'text/css');
    next();
});

// Explicitly serve image files
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('*.png', express.static(path.join(__dirname)));
app.use('*.jpg', express.static(path.join(__dirname)));
app.use('*.svg', express.static(path.join(__dirname)));

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

app.listen(PORT, () => {
    console.log(`Boxxy server kjører på http://localhost:${PORT}`);
});