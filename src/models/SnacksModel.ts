import mongoose from 'mongoose';

const SnacksSchema = new mongoose.Schema({
  _id: String,
  name: String,
});

const SnacksModel = mongoose.model('snacks', SnacksSchema);

export default SnacksModel;
