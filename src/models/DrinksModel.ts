import mongoose from 'mongoose';

const DrinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const DrinkModel = mongoose.model('drink', DrinkSchema);

export default DrinkModel;
