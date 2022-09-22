const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://pochi:Pochi_99@nodeexpressprojects.geyb9cg.mongodb.net/Task-Manager?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED WITH THE DB..."))
  .catch((err) => console.log(err));
