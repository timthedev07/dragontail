import { useState } from "react";
import {
  Button,
  Select,
  ToastPosition,
  ToastType,
  useToast,
} from "dragontail-experimental";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ display: "flex", gap: "10px", justifyItems: "start" }}>
      {children}
    </div>
  );
};

function App() {
  const { addToast } = useToast();
  const [count, setCount] = useState<number>(0);
  const [type, setType] = useState<ToastType>("info");
  const [position, setPosition] = useState<ToastPosition>("bottom-right");

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "70%",
          minWidth: "480px",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Container>
          <Select
            defaultValue={"info"}
            onChange={(e) => {
              setType(e.target.value as any);
            }}
          >
            <option value="info">Info</option>
            <option value="danger">Danger</option>
            <option value="warning">Warning</option>
            <option value="success">Success</option>
          </Select>
        </Container>
        <Container>
          <Select
            defaultValue={"bottom-right"}
            onChange={(e) => {
              setPosition(e.target.value as any);
            }}
          >
            <option value="bottom-right">Bottom Right</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
          </Select>
        </Container>

        <Button
          onClick={() => {
            addToast({
              duration: 1000,
              type,
              position,
              description: `Curr count: ${count}`,
            });
            setCount((prev) => prev + 1);
          }}
        >
          Trigger
        </Button>
      </div>
    </div>
  );
}

export default App;
