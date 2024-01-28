import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import routes from "./src/routes/index.js";


dotenvConfig();

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json({ limit: "50kb" }));

const verifyApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey && apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(401).send("Acceso no autorizado: API key inválida");
  }
};

app.use(cors());
app.use(bodyParser.json());

app.use("/v1/", verifyApiKey, routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`La API está funcionando en el puerto ${port}`);
});
