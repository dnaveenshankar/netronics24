const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'your_database_name'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database!');
});

// Get the page view count
app.get('/view-count', (req, res) => {
    connection.query('SELECT count FROM page_views WHERE id = 1', (err, results) => {
        if (err) throw err;
        res.json({ count: results[0].count });
    });
});

// Increment the page view count
app.post('/increment-view', (req, res) => {
    connection.query('UPDATE page_views SET count = count + 1 WHERE id = 1', (err) => {
        if (err) throw err;
        res.sendStatus(200);
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
