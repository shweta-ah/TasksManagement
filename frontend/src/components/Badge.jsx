import React from "react";
import { clsx } from "clsx";

const Badge = ({ children, variant = "default", className = "", ...props }) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    pending: "bg-yellow-100 text-yellow-800",
    "in-progress": "bg-primary-100 text-primary-800",
    completed: "bg-green-100 text-green-800",
    low: "bg-gray-100 text-gray-800",
    medium: "bg-orange-100 text-orange-800",
    high: "bg-red-100 text-red-800",
    admin: "bg-purple-100 text-purple-800",
    user: "bg-primary-100 text-primary-800",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
