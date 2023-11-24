import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = async () => {
    const DB_URI = process.env.MONGO_URL;
    try {
        if (!DB_URI) {
            throw new Error("MongoDB connection URL is not defined");
        }

        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while Connecting to Database", error.message);
    }
};

export default dbConnection;
