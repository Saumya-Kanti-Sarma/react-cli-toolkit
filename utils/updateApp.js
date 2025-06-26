import fs from "fs";

export default function updateApp(fileName, path) {
  let appContent = fs.readFileSync("src/App.jsx", "utf-8");
  const importLine = `import ${fileName} from "./pages/${fileName}.jsx";`;

  if (!appContent.includes(importLine)) {
    appContent = importLine + "\n" + appContent;
  };

  const routeLine = `<Route path="${path}" element={<${fileName} />} />`;
  if (!appContent.includes(routeLine)) {
    appContent = appContent.replace(
      /(<Routes>[\s\S]*?)(\s*<\/Routes>)/,
      `$1\n${routeLine}$2`
    );// gpt helpd
  }
  fs.writeFileSync("src/App.jsx", appContent, "utf-8");
  console.log(`App.jsx updated`);
}