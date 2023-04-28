import "./App.css";
import { Button, ToastPosition, useToast } from "dragontail-experimental";

function App() {
  const { addToast } = useToast();
  return (
    <div style={{ padding: "20px" }}>
      <Button
        onClick={() => {
          addToast({
            duration: 1000000,
            type: "info",
            position: "bottom-right",
          });
        }}
      >
        Hi
      </Button>
    </div>
  );
}

export default App;
