import fs from "fs";
import path from "path";
import { ReactTemplate } from "../templates/Templeate.js"
import updateApp from "./updateApp.js";

export default function createRoute(input) {
  const pagesDir = path.join("src", "pages", input);
  fs.mkdirSync(pagesDir, { recursive: true });

  const FileName = input.charAt(0).toUpperCase() + input.slice(1);
  const filePath = path.join(pagesDir, `${FileName}`);

  fs.writeFileSync(`${filePath}.jsx`, `${ReactTemplate(`${FileName}`)}`);
  fs.writeFileSync(`${filePath}.css`, ``);
  console.log(`${FileName} route created at ${filePath}`);

  updateApp(FileName, `/${input}`);
}