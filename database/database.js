
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Sascha:0LB3TCR6ySAYLsvZ@cluster0.4jblhjn.mongodb.net/Web2CourseProject?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch {
    console.log("Pinged your deployment. You failed to connect to MongoDB!");
  }
}
run().catch(console.dir);
