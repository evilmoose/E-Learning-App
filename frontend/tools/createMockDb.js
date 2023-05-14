/* eslint-disable no-console */
import { writeFile } from "fs";
import path from "path";
import mockData from "./mockData.js";

const __dirname = path.resolve()


const { courses, authors } = mockData;
const data = JSON.stringify({ courses, authors });
const filepath = path.join(__dirname, "db.json");

writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});