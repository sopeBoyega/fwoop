
import React from "react";

const PulseSpinner: React.FC<{ size?: number; color?: string }> = ({
  size = 16,
  color = "#179C3A",
}) => (
  <span
    className="inline-block align-middle"
    style={{ width: size, height: size }}
    aria-label="Loading"
    role="status"
  >
    <span
      className="absolute inline-block rounded-full opacity-75"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        animation: "pulse-spinner 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }}
    />
    <span
      className="inline-block rounded-full absolute"
      style={{
        width: size * 0.75,
        height: size * 0.75,
        backgroundColor: color,
        left: size * 0.125,
        top: size * 0.125,
      }}
    />
    <style>
      {`
      @keyframes pulse-spinner {
        0%, 100% {
          transform: scale(0.9);
          opacity: 0.8;
        }
        70% {
          transform: scale(1.8);
          opacity: 0;
        }
      }
      `}
    </style>
  </span>
);

export default PulseSpinner;

