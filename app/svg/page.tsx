import React from "react";

export default function page() {
  return (
    <div className="relative size-full border">
      <svg
        viewBox="0 0 24 24"
        width="64"
        height="64"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <polyline points="3 8, 3 4, 21 4, 21 8" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <line x1="8" y1="20" x2="16" y2="20" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        width="64"
        height="64"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <polyline points="4 4, 20 4, 13 12, 20 20, 4 20, 11 12, 4 4" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        width="64"
        height="64"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        // rx
        // ry
        // x-axis-rotation
        // large-arc-flag
        // sweep-flag
        // dx
        // dy
      >
        <line x1="11" y1="12" x2="6" y2="6" />
        <line x1="13" y1="12" x2="18" y2="6" />
        <line x1="11" y1="12" x2="6" y2="18" />
        <line x1="13" y1="12" x2="18" y2="18" />
        <line x1="8" y1="4" x2="16" y2="4" />
        <line x1="8" y1="20" x2="16" y2="20" />

        <path d="M 6 6 q -1 -2 2 -2" />
        <path d="M 18 6 q 1 -2 -2 -2" />
        <path d="M 18 18 q 1 2 -2 2" />
        <path d="M 6 18 q -1 2 2 2" />
      </svg>
    </div>
  );
}
