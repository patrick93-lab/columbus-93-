// filepath: /workspaces/columbus-93-/server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/track', (req, res) => {
    console.log('Tracking data received:', req.body);
    res.status(200).send('Data received');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});