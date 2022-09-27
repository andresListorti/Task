const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks')            - get all the tasks
// app.post('/api/v1/tasks')          - create a new task
// app.get('/api/v1/tasks/:id')       - get single task
// app.patch('/api/v1/tasks/:id')     - update task
// app.delete('/api/v1/tasks/:id')    - detele task

// let arr = [1, 2, 3];
// arr[10] = "hello";
// console.log(arr.length);
// console.log(arr);

let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `${hrs}:${mins}:${secs} - ${period}`;
  console.log(time);
};

clock();
// setInterval(clock, 1000);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is Listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
