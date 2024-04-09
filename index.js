
const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const res = require('express/lib/response');
const { error } = require('console');

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

/*
  ENDPOINT GET
*/
app.get('/home', async (req,res) => {
try{

  res.status(200).send({'msg': 'welcome my son'})
}catch(e){
  res.status(500).json({'error': 'There was a server error'})

}})

/*
  ENDPOINT POST
*/


app.post('/Hub', async (req, res) => {
  try{
    res.status(200).send({
      "Bienvenido al Centro de la Red": req.body
    })
  }catch(e){
    res.status(500).send({'error': 'Internal server error'})
  }
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});