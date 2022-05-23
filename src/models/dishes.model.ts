import mongoose from 'mongoose';

const DishesScheema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const PratosModel = mongoose.model('dishes', DishesScheema);

export default PratosModel;
