const mongoURL = require('./config').url;
const mongoose = require('mongoose');
var Mockgoose = require('mockgoose').Mockgoose;
var mockgoose = new Mockgoose(mongoose);


// const mongoURI = ""

// DB Config
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
const db = mongoURI;



const meme = function emulateDB() {
    if (process.env.NODE_ENV == 'dev') {
        mockgoose.prepareStorage().then(function() {
            mongoose
            .connect(db, { 
                useNewUrlParser: true,
                useCreateIndex: true
            }) 
            .then(() => console.log('MongoDB Connected...'))
            .catch(err => console.log(err));	
        });
        console.log("Emulating...")
    } else {
          mongoose
          .connect(db, { 
            useNewUrlParser: true,
            useCreateIndex: true
          }) 
          .then(() => console.log('MongoDB Connected...'))
          .catch(err => console.log(err));
          console.log("Not Emulating...")
    }
}


module.exports = meme;