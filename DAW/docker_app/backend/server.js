const express = require('express');
const { Pool } = require('pg');
const app = express();
const pool = new Pool({
 user: 'postgres',
 host: 'db',
 database: 'mydatabase',
 password: 'postgres',
 port: 5432,
});
app.get('/', async (req, res) => {
 const result = await pool.query('SELECT NOW() as now');
 res.send(`PostgreSQL Connected: ${result.rows[0].now}`);
});
app.listen(3000, () => console.log('Server running on port 3000'));