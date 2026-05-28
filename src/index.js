import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

if (typeof window !== "undefined") {
  const big = "font-family: 'Bricolage Grotesque', sans-serif; font-size: 22px; font-weight: 800; color: #FF3D7F;";
  const small = "color: #0E0E10; font-size: 13px;";
  // eslint-disable-next-line no-console
  console.log("%cWelcome, stranger.", big);
  // eslint-disable-next-line no-console
  console.log(
    "%cYou opened the console. I used to be a frontend dev like you... then I took a stored proc to the knee.",
    small
  );
  // eslint-disable-next-line no-console
  console.log("%cKnee-deep in the dead code. Find anything fun, ping me.", small);
  // eslint-disable-next-line no-console
  console.log("%cgit push --force is the one thing the Dagger of Time can't fix.", small);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
