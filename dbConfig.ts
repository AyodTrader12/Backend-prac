import { connect } from "mongoose";

export const dbCOnfig = async () => {
  try {
    await connect(process.env.MONGO_DB as string).then(() => {
      console.clear();
      console.log("connection established..");
    });
  } catch (error) {
    console.log(error);
  }
};
