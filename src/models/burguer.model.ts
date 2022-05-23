import mongoose from 'mongoose';

const BurguerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  preparationTime: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: Array,
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

const BurguerModel = mongoose.model('hamburguers', BurguerSchema);

export default BurguerModel;
