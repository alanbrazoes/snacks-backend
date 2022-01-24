import mongoose from 'mongoose';

const SnacksSchema = new mongoose.Schema({
  _id: String,
  name: String,
  preparationTime: Number,
  ingredients: Array,
});

const SnacksModel = mongoose.model('hamburguers', SnacksSchema);

export default SnacksModel;
