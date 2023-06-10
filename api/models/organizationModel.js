import mongoose from "mongoose";
const { Schema } = mongoose;

const organizationSchema = new Schema({
    
});

const Organization = mongoose.model("Organization", organizationSchema);
export default Organization;