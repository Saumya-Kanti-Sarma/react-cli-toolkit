export const ReactTemplate = (Route) => {
  return (
    `import React from 'react';
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
