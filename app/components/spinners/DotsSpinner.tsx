
import React from "react";

const DotsSpinner: React.FC<{ size?: number; color?: string }> = ({
  size = 18,
  color = "#179C3A",
}) => (
  <span className="inline-flex gap-1" aria-label="Loading" role="status">
    {[0, 1, 2].map(i => (
      <span
        key={i}
        className={`inline-block rounded-full`}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          opacity: 0.5 + i * 0.25,
          animation: `dots-bounce 1s ${i * 0.15}s infinite ease-in-out`,
        }}
      />
    ))}
    <style>
      {`
      @keyframes dots-bounce {
        0%, 80%, 100% { transform: scale(0.6); }
        40% { transform: scale(1); }
      }`}
    </style>
  </span>
);

export default DotsSpinner;

