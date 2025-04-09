import React from "react";

export function Checkbox({ id, className = "", ...props }) {
  return (
    <input
      type="checkbox"
      id={id}
      className={`accent-green-600 h-4 w-4 ${className}`}
      {...props}
    />
  );
}
