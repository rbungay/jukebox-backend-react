import mongoose from "mongoose";
const Schema = mongoose.Schema;

const trackSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true},
  
});

export default mongoose.model("Track", trackSchema);