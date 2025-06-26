#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { ReactTemplate } from "./templates/Templeate.js";

const input = process.argv.splice(2).join(" ")

if (!input) {
  console.log("this is react-cli-toolkit");
}
// create routes
function createRoutes() {
  const pagesDir = path.join("src", "pages");
  fs.mkdirSync(pagesDir, { recursive: true });
  const FileName = input.charAt(0).toUpperCase() + input.slice(1);
  const filePath = path.join(pagesDir, `${FileName}.jsx`);
  fs.writeFileSync(filePath, `${ReactTemplate(`${FileName}`)}`);
  console.log(`${FileName} route created at ${filePath}`);
}
createRoutes();
