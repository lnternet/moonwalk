import React from "react";
import "./app.css";
import { Dog } from "./components/dog";
import { createRoot } from "react-dom/client";

export default function App() {
  return <Dog />;
}

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(<App />);
