import mongoose from "mongoose";
import app from "./app.js";

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

// AniaKurtiak;
// jG0gXax4r3DXpTkz;
