
const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module

const app = express();
const port = 2712;

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

app.get('/players', async (req, res) => {
  try{
    
    }catch(e){
      res.status(500).send({'error': 'Internal server error'})
    }
})

app.get('/boom', async (req, res) => {
  res.status(500).json({ message: "My bad" })
})

app.get('/players/salary', async (req, res) => {
  res.status(403).send({
    'error': 'Cannot access this information'
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/Galera vai a jogar fuchibol', async (req, res) => {

  try{
    res.status(200).send({"msg": "Galera vai a jogar fuchibol"})
    } catch(0){
      res.status(500).send({'error': 'Cara vc nao fala portugues'})
    }
})