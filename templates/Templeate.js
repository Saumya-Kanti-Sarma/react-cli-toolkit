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
