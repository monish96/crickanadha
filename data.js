const mongoose = require("mongoose");

const Schema = mongoose.Schema;



// const Data = require("./data");

// var UserDetails = mongoose.model("UserDetails");

// this is our MongoDB database connection for Sweat and gain

const dbRoute = "mongodb://monish:monish123@mongodb-676-0.cloudclusters.net/sweatandgain?authSource=admin";




//load data

const detailsSchema = new Schema(

{

Scores: {

type: String,

required: true,

},

TodayMatch:{

type: String,

required: true,

},

BowlingOverDetails:{

type: String,

required: true,

},

BattingOverDetails:{

type: String,

required: true,

},

Over:{

type: String,

required: true,

},

Highlights:{

type: String,

required: true,

}

},

{ timestamps: true }

);



//mongoconnect

module.exports = mongoose.model('detailsSchema',detailsSchema);

// var data = detailsSchema_1({

// TodayMatch: ' INDIA VS PAKISTAN',

// Scores:'IND 251/2 VS PAK 10/1',

// BowlingOverDetails: 'Bumrah 3.1',

// BattingOverDetails: 'Babar Run 21 and Afridi Run 3 / 3.1',

// Over: '3.1',

// Highlights: 'Babar is on FIRE.........!'

// })




// data.save(err => {



// if (err) {

// console.log(err)

// } else {

// console.log("Dummy Data Loaded")

// }



// })




// detailsSchema_1.find((err, data) => {

// if (err) {

// console.log(err)

// } else {

// console.log(data)

// }



// }).limit(1).sort({$natural:-1});
