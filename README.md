# Minimal component library built with TailwindCSS and React

Heavily inspired by ChakraUI

## Installation

```bash
yarn add dragontail
```

## Get Started

### Next.js

```typescript
// pages/_app.tsx
import type { AppProps } from "next/app";
import { DragontailProvider } from "dragontail";

// uncomment the following line for non-tailwind projects
// import "dragontail/dist/build.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DragontailProvider theme="light">
      <Component {...pageProps} />
    </DragontailProvider>
  );
};

export default App;
```

### Create React App

```typescript
// app.tsx
import { DragontailProvider } from "dragontail";
// uncomment the following line for non-tailwind projects
// import "dragontail/dist/build.css"

export const App = () => {
  return (
    <DragontailProvider theme="light">
      <div>...</div>
    </DragontailProvider>
  );
};
```

### TailwindCSS Config
For react projects already using TailwindCSS, add the following content to your TailwindCSS configuration file:
```
module.exports = {
  content: [
     ...
    "node_modules/dragontail/dist/cjs/index.js"
  ]
};
```
