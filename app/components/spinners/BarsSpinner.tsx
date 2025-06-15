
import React from "react";

const BarsSpinner: React.FC<{ size?: number; color?: string }> = ({
  size = 30,
  color = "#179C3A",
}) => (
  <span
    className="inline-block"
    style={{ height: size, width: size * 1.5, position: "relative" }}
    aria-label="Loading"
    role="status"
  >
    {[0, 1, 2, 3, 4].map(i => (
      <span
        key={i}
        style={{
          display: "inline-block",
          position: "absolute",
          left: `${i * 20}%`,
          width: size / 6,
          height: size * 0.8,
          backgroundColor: color,
          opacity: 0.6 + 0.1 * i,
          borderRadius: 2,
          animation: `bars-bounce 1s ${i * 0.13}s infinite ease-in-out`,
        }}
      />
    ))}
    <style>
      {`
      @keyframes bars-bounce {
        0%, 40%, 100% { transform: scaleY(0.5); }
        20% { transform: scaleY(1); }
      }
      `}
    </style>
  </span>
);

export default BarsSpinner;

