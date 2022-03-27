import mongoose from 'mongoose';

const LoginSchema = new mongoose.Schema({
  _id: String,
  email: String,
  password: String,
});

const LoginModel = mongoose.model('users', LoginSchema);

export default LoginModel;
