const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


var readDate = new Date();
var lastReasult = [];
var lastAllResult = [];


async function getResult(){
  try{
    const deprems = await fetch('https://deprem.afad.gov.tr/latestCatalogsList');
    let data = await deprems.json();
    if(data.length > 0){
      lastAllResult = data;
      lastReasult = data.slice(0, 15);
    }else{
      console.log('Service Not Response Successfully.')
    }

  }catch(err){
    console.log(err.message);
  }
}
getResult();
setInterval(getResult,20000);

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});

app.get('/depremgetir', async(req, res) => {
 
  res.json(lastReasult)
});

app.get('/alllastresult', async(req, res) => {
 
  res.json(lastAllResult)
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('server started'));
