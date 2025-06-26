import { exec } from "child_process";
import fs from "fs";
import { AppTemplate } from "../templates/Templeate.js";

export default function checkPackage() {
  const readPackage = fs.readFileSync("package.json", "utf-8");
  if (!readPackage.includes("react-router-dom")) {
    exec("npm install react-router-dom");
    fs.writeFileSync('src/App.jsx', AppTemplate());
  };
  const readApp = fs.readFileSync("src/App.jsx", "utf-8");
  if (!readApp.includes("react-router-dom")) {
    fs.writeFileSync('src/App.jsx', AppTemplate());
  };
};