"use client";
import { ISVG } from "..";

function SortIcon({ className, ...props }: ISVG) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="13"
      viewBox="0 0 20 13"
      fill="#7653FC"
      className={className}
    >
      <rect width="20" height="3" rx="1.5" />
      <rect y="5" width="14" height="3" rx="1.5" />
      <rect y="10" width="8" height="3" rx="1.5" />
    </svg>
  );
}

export default SortIcon;
