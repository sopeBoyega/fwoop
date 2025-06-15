
import React from "react";
import { LoaderPinwheel } from "lucide-react";

const PinwheelSpinner: React.FC<{ size?: number; color?: string }> = ({
  size = 30,
  color = "#179C3A",
}) => (
  <span aria-label="Loading" role="status">
    <LoaderPinwheel className="animate-spin" size={size} color={color} />
  </span>
);

export default PinwheelSpinner;
