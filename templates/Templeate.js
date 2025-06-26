export const ReactTemplate = (Route) => {
  return (
    `import React from 'react';
import "./${Route}.css";

const ${Route} = () => {
  return (
    <>
      route: ${Route}
    </>
  )
}

export default ${Route}    
`)
}

export const AppTemplate = () => {
  return (
    `import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
  );
};
export default App;`
  )
}