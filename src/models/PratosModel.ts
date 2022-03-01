import mongoose from 'mongoose';

const DishesScheema = new mongoose.Schema({
  name: String,
  price: Number,
  ingredients: Array,
  type: String,
});

const PratosModel = mongoose.model('dishes', DishesScheema);

export default PratosModel;
