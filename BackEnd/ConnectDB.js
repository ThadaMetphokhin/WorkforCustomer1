const { MongoClient } = require("mongodb");
const username = encodeURIComponent("<root>");
const password = encodeURIComponent("<1234>");
const cluster = "<clusterName>";
const authSource = "<authSource>";
const authMechanism = "<authMechanism>";
let uri = `mongodb+srv://root:<1234>@roomforrent.37ow2mf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db("<dbName>");
    const ratings = database.collection("<collName>");
    const cursor = ratings.find();
    await cursor.forEach((doc) => console.dir(doc));
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
