import React from 'react';

interface IconAdjustmentsCancelProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAdjustmentsCancel: React.FC<IconAdjustmentsCancelProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-adjustments-cancel ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M6 4v4" />
    <path d="M6 12v8" />
    <path d="M13.499 14.675a2 2 0 1 0 -1.499 3.325" />
    <path d="M12 4v10" />
    <path d="M12 18v2" />
    <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M18 4v1" />
    <path d="M18 9v3" />
    <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M17 21l4 -4" />
  </svg>
  );
};

export default IconAdjustmentsCancel;