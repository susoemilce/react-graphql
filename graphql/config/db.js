const mongoose = require("mongoose");
require("dotenv").config({ path: "variable.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex:true
    });
    console.log("DB Conectada");
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    process.exit(1); //Detener la aplicacion
  }
};

module.exports = conectarDB;
