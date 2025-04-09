import React from "react";

export function Dialog({ open, onOpenChange, children }) {
  return open ? <div className="fixed inset-0 z-50 bg-black/50">{children}</div> : null;
}

export function DialogTrigger({ asChild, children }) {
  return <>{children}</>;
}

export function DialogContent({ className = "", children }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className={`bg-white p-6 rounded-xl shadow-lg ${className}`}>
        {children}
      </div>
    </div>
  );
}

export function DialogTitle({ children, className = "" }) {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
}
