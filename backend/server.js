const { MongoClient, ServerApiVersion } = require('mongodb');
// WE CENSORED THIS URL TO AVOID SECURITY LEAKS
const uri = `mongodb+srv://####:##########@cluster1.tajctak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

//const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster1.tajctak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
const port = 4000

let accountCollection;
async function run() {
    try {
      // Connect the client to the server    (optional starting in v4.7)
      await client.connect();
      // Access the accounts database and the accounts collection
      const db = client.db("accounts");
      accountCollection = db.collection("accounts");

      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch(error) {
        console.log(error);
    }
  }
  run().catch(console.dir);

app.get('/api/users/:email', async(req,res) =>{
    const userEmail = req.params.email;
    console.log(userEmail);
    const account = await accountCollection.findOne({username:userEmail});
    if (account) {
      console.log(account);
      res.send(account);
    } else {
      console.log(`No account found for email: ${userEmail}`);
      res.status(404).send(`No account found for email: ${userEmail}`);
    }
})

app.post('/api/updateLesson/:email', async(req, res) => {
    const userEmail = req.params.email;
    const result = await accountCollection.updateOne(
      { username: userEmail }, 
      { $inc: { lessonsCompleted: 1} }
  );
  if (result.matchedCount > 0) {
    res.send(`Successfully updated lessonsCompleted for email: ${userEmail}`);
  } else {
      res.status(404).send(`No account found for email: ${userEmail}`);
  }
})

app.post('/api/createUser/:email', async(req, res) => {
    const userEmail = req.params.email;
    const result = await accountCollection.insertOne({username: userEmail, lessonsCompleted: 0});
    if (result.insertedCount > 0) {
      res.send(`Successfully created account for email: ${userEmail}`);
    } else {
      res.status(404).send(`Failed to create account for email: ${userEmail}`);
    }
})

app.get('/api/test', async(req,res) =>{
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})