import React from 'react';

interface IconToolsKitchenProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconToolsKitchen: React.FC<IconToolsKitchenProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-tools-kitchen ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 3h8l-1 9h-6l-1 -9" />
    <path d="M7 18h2v3h-2l0 -3" />
    <path d="M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12" />
    <path d="M20 15v6h-1v-3" />
    <path d="M8 12l0 6" />
  </svg>
  );
};

export default IconToolsKitchen;