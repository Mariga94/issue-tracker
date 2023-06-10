import mongoose from "mongoose";
const { Schema } = mongoose;

/**
 * @typedef {Object} Issue
 * @property {string} name - The name of the issue
 * @property {string} assignee - The user required to undertake the issue
 * @property {string} timeline - The duration of that will take to complete the issue
 * @property {string} issueType - The type of issue created e.g bug, improvement, task, new feature e.t.c
 * @property {string} status - The position of the issue e.g Open, In progress, In Review, Done e.t.c
 * @property {string} priority - The urgency of completion i.e Highest, High, Low, Lowest
 * @property {string} shortDesc - The summary of the issue
 * @property {string} longDesc - The detailed summary of the issue i.e. might include snapshots
 */
const issueSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      // required: true,
    },
    isReporter: {
      type: Boolean,
      default: false,
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    timeline: {
      type: String,
      required: true,
      default: "ToDo",
    },
    issueType: {
      type: String,
      enum: ["Bug", "Improvement", "Task", "New feature", "ToDo"],
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Open", "In progress", "In Review", "Done"],
      default: "Open",
    },
    priority: {
      type: String,
      enum: ["Highest", "High", "Low", "Lowest"],
      default: "High",
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timeStamps: true,
  }
);

const Issue = mongoose.model("Issue", issueSchema);
export default Issue;
