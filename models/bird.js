/**
 * Created by glendex on 3/30/16.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var birdSchema = new Schema({
    name: { type : String,
        required : true,
        unique : true,
        lowercase : true }, //Convert to lowercase - helpful
    description: String,
    averageEggsLaid: { type : Number, min : 1, max: 50}, //Handles both integer and float numbers
    threatened: {type : Boolean, default : false}, //Is bird vulnerable to extinction?
    //nested data..
    nestData :{ location: String, materials : String },
    datesSeen: [{ type : Date, default : Date.now }]       //Date spotted in the wild
});


var Bird = mongoose.model('Bird', birdSchema);

module.exports = Bird;