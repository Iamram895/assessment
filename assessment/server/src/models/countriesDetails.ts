import mongoose, { Model, Schema, Document } from "mongoose";

const countriesSchema = new Schema({
  indicator: {
    id: String,
    value: String,
  },
  country: {
    id: String,
    value: String,
  },
  countryiso3code: String,
  date: Number,
  value: Number,
  unit: String,
  obs_status: String,
  decimal: Number,
});

export default mongoose.model("Countries", countriesSchema);
