#!/usr/bin/env node
import createRoute from "./utils/createRoute.js";

const input = process.argv.splice(2).join(" ")
if (!input) {
  console.log("this is react-cli-toolkit");
}

// create routes
createRoute(input);
