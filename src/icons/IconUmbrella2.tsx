import React from 'react';

interface IconUmbrella2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconUmbrella2: React.FC<IconUmbrella2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-umbrella-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5.343 7.343a8 8 0 1 1 11.314 11.314l-11.314 -11.314" />
    <path d="M10.828 13.34l-4.242 4.243a2 2 0 1 0 2.828 2.828" />
  </svg>
  );
};

export default IconUmbrella2;