import React, { useState } from "react";
import { ValueSelector } from "./data/Components";
import "./base.scss";

function App() {
  return (
    <form onSubmit={() => {}} className="form-wrapper">
      <ValueSelector heading="Estate" />
      <ValueSelector heading="5-6 Passengers" />
      <ValueSelector heading="7 Passengers" />
      <ValueSelector heading="8 Passengers" />
      <ValueSelector heading="9 Passengers" />
      <ValueSelector heading="14 Passengers" />
      <ValueSelector heading="16 Passengers" />
    </form>
  );
}

export default App;
