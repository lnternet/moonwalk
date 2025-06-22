import "./app.css";
import { createRoot } from "react-dom/client";
import { Moon } from "./components/moon";

export default function App() {
  return <Moon />;
}

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(<App />);
