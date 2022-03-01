import mongoose from 'mongoose';

const BurguerSchema = new mongoose.Schema({
  name: String,
  preparationTime: Number,
  ingredients: Array,
  price: Number,
  type: String,
});

const BurguerModel = mongoose.model('hamburguers', BurguerSchema);

export default BurguerModel;
