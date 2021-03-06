import mongoose from 'mongoose';

const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const LoginModel = mongoose.model('users', LoginSchema);

export default LoginModel;
