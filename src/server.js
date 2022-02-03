const express = require('express');
const app = express();
const Contenedor = require('./container');
let visitas = 0;
const producto = new Contenedor('./products.json');

app.get('/', (req, res) => {
  res.send('Desafio clase 6');
});

app.get('/productos', async (req, res) => {
  const data = await producto.getAll();
  res.send(JSON.stringify(data));
});

app.get('/productoRandom', async (req, res) => {
  const data = await producto.getAll();
  const rand = Math.floor(Math.random() * data.length);
  var rValue = data[rand];
  res.send(JSON.stringify(rValue));
});

app.get('/visitas', (req, res) => {
  visitas++;
  res.send(`Visitas ${visitas}`);
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});

server.on('err', err => {
  console.log(`Error: ${err}`);
});
