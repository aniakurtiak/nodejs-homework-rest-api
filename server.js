import mongoose from "mongoose";
import app from "./app.js";

const DB_HOST =
  "mongodb+srv://AniaKurtiak:jG0gXax4r3DXpTkz@cluster0.pan0snk.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then((result) => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

// AniaKurtiak;
// jG0gXax4r3DXpTkz;
