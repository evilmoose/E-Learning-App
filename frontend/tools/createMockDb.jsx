/* eslint-disable no-console */
import { writeFile } from "fs";
import { join } from "path";
import mockData from "./mockData";

const { courses, authors } = mockData;
const data = JSON.stringify({ courses, authors });
const filepath = join(__dirname, "db.json");

writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});