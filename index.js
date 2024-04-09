
const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module

const app = express();
const port = 3000;

// Allow all cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// -------------------------------------------- ENDPOINTS --------------------------------------------

/****************************************
 * Business
****************************************/
app.post('/data', (req, res) => {
  try{
}catch(e){
  res.status(500).send({'error': 'Internal server error'})

  const datosRecibidos = req.body;
  datos = datosRecibidos;
  res.json({ 'msg': 'Datos Recibidos Correctamente'});+
}
})

app.put('/data/update', (req, res) => {
  const datosActualizados = req.body;
  datos = datosActualizados;
  res.json({ 'msg': 'Datos Actualizados Correctamente'})
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});