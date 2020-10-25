const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//puerto donde se ejecuta angular
var corsOptions = {
  origin: "https://git.heroku.com/andrea--herokuprova22.git"
};

app.use(cors(corsOptions));
// app.use(cors());

//sync database
const db = require("./server/models");
db.sequelize.sync();


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// // simple route
app.use(express.static('./src/dist/board-games-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/board-games-app/'}),
);

//Include routes
require("./server/routes/juego.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});