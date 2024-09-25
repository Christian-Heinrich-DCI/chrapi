import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send('Ihr braucht noch /&lt;Org&gt;');
});

app.get('/atlassian', (req, res) => {
  fs.readFile('./json/atlassian.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/canonical', (req, res) => {
  fs.readFile('./json/canonical.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/microsoft', (req, res) => {
  fs.readFile('./json/microsoft.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/oracle', (req, res) => {
  fs.readFile('./json/oracle.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/robert-koch-institut', (req, res) => {
  fs.readFile('./json/robert-koch-institut.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.listen(process.env.PORT || 3456, () => {
  console.log('Backend running on port: ' + (process.env.PORT || 3456));
});
