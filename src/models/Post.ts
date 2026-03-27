import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  postId: string;
  message: string;
  createdTime: Date;
  fullPicture?: string;
  permalink: string;
  likes: number;
  comments: number;
}

const PostSchema = new Schema<IPost>({
  postId: { type: String, required: true, unique: true },
  message: { type: String, default: "" },
  createdTime: { type: Date, required: true },
  fullPicture: { type: String },
  permalink: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
}, { timestamps: true });

export const Post = mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);
