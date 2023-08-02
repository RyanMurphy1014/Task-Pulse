//Dependency setup

const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

const mongodb = require("mongodb");
const mongoose = require("mongoose");

const express = require("express");
const app = express();

//Model importing
const ProjectSchema = require("./models/ProjectSchema");

//Express setup
app.use(cors);
app.use(express.json());
app.listen(process.env.PORT, console.log(`Server started on port: ${PORT}`));

//Mongoose setup

async function connectToDb() {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connection to MongoDB/Atlas was sucessful.");
  } catch (error) {
    console.log(error);
    console.log("Connection to MongoDB/Atlas was un-sucessful.");
  }
}
connectToDb();

//Post Setup
const testProject = new ProjectSchema({ name: "Project0", members: "Ryan" });
testProject.save().then(() => {
  console.log("test project saved.");
});
