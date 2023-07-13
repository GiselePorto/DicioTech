import  mongoose  from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:Papai123@cluster0.vre6zdq.mongodb.net/senac"
);

let db = mongoose.connection;

export default db;

// adicionar no postiman esse Diciotech
