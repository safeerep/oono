import mongoose, { Schema } from "mongoose";

const SchoolSchema = new Schema(
  {
    name: { type: String, required: true },
    place: { type: String, required: true },
    district: { type: String, required: true },
    // contactPhone: { type: String, required: true },
    // status: { type: String, enum: ["Active", "Pending"], default: "Active" },
  },
  { timestamps: true }
);

export const School =
  mongoose.models.School || mongoose.model("School", SchoolSchema);
