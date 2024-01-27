const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.plugin(slug);

const Course = new Schema({
  _id: { type: Number, },
  name: { type: String, maxLenght: 255},
  description: { type: String, maxLenght: 600},
  image: { type: String, maxLenght: 255},
  videoId: { type: String, maxLenght: 255},
  slug: { type: String, slug: 'name', unique: true},
}, {
  _id: false,
  timestamps: true
});

var mongooseDelete = require('mongoose-delete');
Course.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all'
  });

Course.plugin(AutoIncrement);

module.exports = mongoose.model('Course', Course);