import React from "react";
import { createRoot } from "react-dom/client"; // <- use client entry
import Menu from "./components/Menu";
import data from "./data/recipes.json";

// Select root element
const container = document.getElementById("root");

// Create React root and render
const root = createRoot(container);
root.render(<Menu recipes={data} />);
