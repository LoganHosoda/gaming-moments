import mongoose from 'mongoose';

const googleUserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  sub: { type: String },
  id: { type: String },
  image: { type: String }
})

export default mongoose.model("GoogleUser", googleUserSchema);