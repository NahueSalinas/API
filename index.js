
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

app.get('/code', async (req, res) => {
  try{
    
    }catch(e){
      res.status(200).send({'Codigos de Programación Basicos': 'Se utilizan normalmente Html, Js(JavaScript), CSS, C#, C+, C++ y C'})
    }
})

app.get('/How', async (req, res) => {
  res.status(200).json({ message: "Como aprendemos a programar?, bueno en caso que no puedas permitirte mirar video en YT, podes usar la normal herramienta IA ChatGpt que te puede ayudar en todos los lenguajes de programación o tambien la IA de programación BlackBox que esta solo especializada en los lenguajes de programación en incluso sabe mas que chat gpt en terminos de la programación." })
})

app.get('/Codigos', async (req, res) => {
  res.status(403).send({
    'error': 'Perdón pero no te puedo dar acceso a los codigos de la pagina'
  })
})



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});