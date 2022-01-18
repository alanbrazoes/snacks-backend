import mongoose from 'mongoose';

const SnacksSchema = new mongoose.Schema({
  _id: String,
  hamburguers: [
    {
      name: String,
      ingredients: [String],
    },
  ],
});

const SnacksModel = mongoose.model('homes', SnacksSchema);

export default SnacksModel;
