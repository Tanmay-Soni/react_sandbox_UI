import { useState } from "react"

export function Button({ show, setShow, color, children }) {
  return (
    <button
      onClick={setShow ? () => setShow(!show) : undefined}
      style={{ backgroundColor: color }}
    >
      <p>{children ? children : show === true ? "Hide Item" : "Show Item"}</p>
    </button>
  );
}
