const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (images, CSS, JS)
app.use(express.static(path.join(__dirname), {
    extensions: false // Don't auto-add .html
}));

// Redirect .html URLs to clean URLs (for SEO)
app.use((req, res, next) => {
    if (req.path.endsWith('.html')) {
        const cleanPath = req.path.slice(0, -5);
        return res.redirect(301, cleanPath);
    }
    next();
});

// Main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Container utleie - main page
app.get('/container-utleie', (req, res) => {
    res.sendFile(path.join(__dirname, 'utleiecontainere.html'));
});

// Container utleie - specific sizes (hierarchical)
app.get('/container-utleie/8-fot-container', (req, res) => {
    res.sendFile(path.join(__dirname, 'container-8ft.html'));
});

app.get('/container-utleie/10-fot-container', (req, res) => {
    res.sendFile(path.join(__dirname, 'container-10ft.html'));
});

app.get('/container-utleie/20-fot-container', (req, res) => {
    res.sendFile(path.join(__dirname, 'container-20ft.html'));
});

// Minilager pages
app.get('/minilager-lillestrom', (req, res) => {
    res.sendFile(path.join(__dirname, 'minilager-lillestrom.html'));
});

app.get('/minilager-oppaker', (req, res) => {
    res.sendFile(path.join(__dirname, 'minilager-oppaker.html'));
});

// Support page
app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, 'support.html'));
});

// Backup/bestilling pages (legacy)
app.get('/bestilling', (req, res) => {
    res.sendFile(path.join(__dirname, 'backup.html'));
});

app.get('/backup', (req, res) => {
    res.sendFile(path.join(__dirname, 'backup.html'));
});

// Sitemap and robots.txt with correct content-type
app.get('/sitemap.xml', (req, res) => {
    res.type('application/xml');
    res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.sendFile(path.join(__dirname, 'robots.txt'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Boxxy server kjører på:`);
    console.log(`  Local:   http://localhost:${PORT}`);
    console.log(`  Network: http://10.0.0.36:${PORT}`);
});