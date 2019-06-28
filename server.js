const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const detailsSchema = require("./data");
const API_PORT = 8888;
const app = express();
const router = express.Router();
const env = 'localhost:3000'
mongoose.connect(
    'mongodb://monish:monish123@mongodb-676-0.cloudclusters.net/sweatandgain?authSource=admin',
    { useNewUrlParser: true, useCreateIndex: true }
);
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
router.get("/getData", (req, res) => {
    detailsSchema.find((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    });
});

app.get("/", (req, res) => {
    res.send('ok')
});
router.get("/getOneData", (req, res) => {
    detailsSchema.find((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    }).limit(1).sort({$natural:-1});
});
router.post("/putData", async (req, res) => {
    var details = new detailsSchema({
        TodayMatch: req.body.TodayMatch,
        Scores: req.body.Scores,
        BowlingOverDetails: req.body.BowlingOverDetails,
        BattingOverDetails: req.body.BattingOverDetails,
        Over: req.body.Over,
        Highlights: req.body.Highlights
    })
    details.save(err => {
        if (err) {
            console.log(err)
        } else {
            res.send('loaded')
        }

    })

});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT} ${env}`));
