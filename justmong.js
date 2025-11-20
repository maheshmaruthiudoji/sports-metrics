const { MongoClient } = require("mongodb");

// TEMP: Put your MONGODB_URI directly here
const uri = "mongodb+srv://maheshudoji8088_db_user:mahesh2003@cluster0.dic96tz.mongodb.net/sports-analytics?retryWrites=true&w=majority&appName=Cluster0";

async function test() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected successfully!");
    await client.close();
  } catch (err) {
    console.error("Connection failed:", err);
  }
}

test();