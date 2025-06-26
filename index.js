#!/usr/bin/env node
import checkPackage from "./utils/checkPackage.js";
import createRoute from "./utils/createRoute.js";

const input = process.argv.splice(2).join(" ")
if (!input) {
  console.log("this is react-cli-toolkit");
}
else {
  // check if react router dom is installed:
  checkPackage();
  // create routes
  createRoute(input);
}
