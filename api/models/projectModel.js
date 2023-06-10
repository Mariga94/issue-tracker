import mongoose from "mongoose";
const { Schema } = mongoose;
/**
 * @typedef {Object} Project
 * @property {string} name - The name of the project
 * @property {string} user - The ID of the creater of the project
 * @property {string} issues - The ID of list of issues created by user
 */
const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["company", "personal", "School"],
    required: true,
  },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  issues: [{ type: Schema.Types.ObjectId, ref: "Issue" }],
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
