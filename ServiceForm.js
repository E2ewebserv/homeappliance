const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();

app.use(express.json()); // JSON format data accept panna
app.use(cors()); // Cross-Origin requests handle panna

const uri = "Your_MongoDB_Connection_String"; // Connection string inge use pannunga
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("your-db-name").collection("reviews");
  
  // POST API to save reviews
  app.post('/submit-review', (req, res) => {
    const newReview = req.body;
    collection.insertOne(newReview)
      .then(result => res.status(201).send(result))
      .catch(error => res.status(500).send(error));
  });

  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
});
