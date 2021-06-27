const mongoose = require("mongoose");
const uri_local = "mongodb://localhost/DeliveryExpress";
const uri_cloud =
  "mongodb+srv://npino:npino2020@cluster0.ku0xy.mongodb.net/DeliveryExpress?retryWrites=true&w=majority";

mongoose
  .connect(uri_cloud, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Conectado a la Base de Datos"))
  .catch((err) => console.error(err));

module.exports = mongoose;
