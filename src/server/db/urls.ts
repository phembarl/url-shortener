import mongoose from 'mongoose';

const schema = {
  url: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  shortenedUrl: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
};
const collectionName = 'urls';
const urlSchema = new mongoose.Schema(schema, { id: false });
const Url = mongoose.model(collectionName, urlSchema);

export default Url;
