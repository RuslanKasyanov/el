/**
 * Created by ruslan on 27.12.16.
 */
var mongoose = require('mongoose'),
    cardWord = mongoose.Schema({
        name: String,
        description: String
    }),
    CardWord = mongoose.model('CardWord', cardWord);
module.exports = CardWord;
