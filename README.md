# Minimum component library built with TailwindCSS and React

Inspired by ChakraUI

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
import { DragontailProvider } from "dragontail";

export const App = () => {
  return (
    <DragontailProvider theme="light">
      <div>...</div>
    </DragontailProvider>
  );
};
```
