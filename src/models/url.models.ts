import mongoose, { Schema, Document } from "moongose";

export interface IUrl extends Document {
  originalUrl: string;
  shortCode: string;
  createdAt: Date;
}
const UrlSchema: Schema = new Schema({
  originalUrl: { type: String, required: true },
  shortCode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IUrl>("Url", UrlSchema);
