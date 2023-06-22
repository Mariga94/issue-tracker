import mongoose from "mongoose";
const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    issue: {
      type: Schema.Types.ObjectId,
      ref: "Issue",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
messageSchema.statics.createMessage = async function (
  userId,
  issueId,
  teamId,
  content
) {
  try {
    const message = new this({
      sender: userId,
      team: teamId,
      issue: issueId,
      content: content,
    });
    console.log('This is a new message',message)
    await message.save();
    return message;
  } catch (error) {
    throw new Error("Can't create new Message!");
  }
};

messageSchema.statics.getMessages = async function (issueId) {
  try {
    const messages = await this.find({ issue: issueId }).populate({
      path: "sender",
      model: "User",
      select: "-password -projects -teams -createAt -updateAt",
    });
    return messages;
  } catch (error) {
    throw new Error("Can't fetch messages!");
  }
};
const Message = mongoose.model("Message", messageSchema);
export default Message;
