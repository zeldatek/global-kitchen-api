const mongoose = require("mongoose");

mongoose.connect("YOUR_MONGO_URI_HERE")
  .then(() => console.log("Connected OK"))
  .catch(err => console.log(err));