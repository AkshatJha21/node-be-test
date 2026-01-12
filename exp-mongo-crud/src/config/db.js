import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_KEY);
        console.log("MongoDB connection established");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDB;