import mongoose from 'mongoose';

const DrinkSchema = new mongoose.Schema({
  name: String,
  price: Number,
  type: String,
});

const DrinkModel = mongoose.model('drink', DrinkSchema);

export default DrinkModel;
