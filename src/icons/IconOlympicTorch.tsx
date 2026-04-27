import React from 'react';

interface IconOlympicTorchProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconOlympicTorch: React.FC<IconOlympicTorchProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-olympic-torch ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 9h8" />
    <path d="M9 9c1 4.364 1 7.636 1 12h4c0 -4.364 0 -7.636 1 -12" />
    <path d="M11 3c0 2.5 -1 2.66 -1 4a1.9 1.9 0 0 0 2 2a1.87 1.87 0 0 0 2 -2c0 -1.41 -1 -3 -3 -4" />
  </svg>
  );
};

export default IconOlympicTorch;