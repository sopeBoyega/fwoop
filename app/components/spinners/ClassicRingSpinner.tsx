
import React from "react";

const ClassicRingSpinner: React.FC<{ size?: number; color?: string }> = ({
  size = 40,
  color = "#179C3A",
}) => (
  <span
    className="inline-block align-middle"
    style={{ width: size, height: size }}
    aria-label="Loading"
    role="status"
  >
    <svg
      className="animate-spin"
      viewBox="0 0 50 50"
      style={{ width: size, height: size }}
    >
      <circle
        className="opacity-20"
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke={color}
        strokeWidth="6"
      />
      <circle
        className="opacity-80"
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="80"
        strokeDashoffset="60"
      />
    </svg>
  </span>
);

export default ClassicRingSpinner;

