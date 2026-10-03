import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema(
  {
    name: { type: String, required: true },
    grade: { type: String, required: true },
    schoolId: { type: Schema.Types.ObjectId, ref: "School", required: true },
    parentName: { type: String, required: true },
    parentContact: { type: String, required: true },
    deliverySlot: { type: String, default: "12:30 PM" },
    dietaryNotes: { type: String, default: "" },
    status: { type: String, enum: ["Active", "Paused"], default: "Active" },
  },
  { timestamps: true }
);
export const Student =
  mongoose.models.Student || mongoose.model("Student", StudentSchema);
