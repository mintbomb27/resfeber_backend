require("dotenv").config();

//dependencies
//const cron = require("node-cron");
const express = require("express");
const app = express();
//const mongoose = require("mongoose");

//const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/covid_app";


const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

  // Swagger config
  const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Resfeber API",
        description: "Resfeber API Information",
        servers: ["http://localhost:4000"]
      }
    },
    // ['.routes/*.js']
    apis: ["routes/apiRoutes.js"]
  };

//setup Swagger for auto documentation
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));



//Routes
const apiRoutes = require("./routes/apiRoutes");


// mongoose
//     .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("✅ Databse Connected!");
//     });

app.use(express.json());

app.use("/", async (req, res) => {
    res.send("The server is working!");
});

app.use("/api", apiRoutes);



const PORT = process.env.port || 4000;
app.listen(PORT, () => {
    console.log("🚀 Server Ready!");
});
