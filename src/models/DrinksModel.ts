import mongoose from 'mongoose';

const DrinkSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const DrinkModel = mongoose.model('drinks', DrinkSchema);

export default DrinkModel;
