import mongoose from 'mongoose';

const PratosScheema = new mongoose.Schema({
  name: String,
  price: Number,
  ingredients: Array,
});

const PratosModel = mongoose.model('pratos', PratosScheema);

export default PratosModel;
