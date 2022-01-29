import mongoose from 'mongoose';

const BurguerSchema = new mongoose.Schema({
  name: String,
  preparationTime: Number,
  ingredients: Array,
});

const BurguerModel = mongoose.model('hamburguers', BurguerSchema);

export default BurguerModel;
