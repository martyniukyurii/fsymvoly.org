import mongoose, { Schema, Document } from "mongoose";

export interface IVolunteer extends Document {
  name: string;
  contact: string;
  skills: string[];
  comment?: string;
  createdAt: Date;
}

const VolunteerSchema = new Schema<IVolunteer>({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  skills: [{ type: String }],
  comment: { type: String },
}, { timestamps: true });

export const Volunteer = mongoose.models.Volunteer || mongoose.model<IVolunteer>("Volunteer", VolunteerSchema);
