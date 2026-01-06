import React from 'react';

interface IconUmbrellaClosed2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconUmbrellaClosed2: React.FC<IconUmbrellaClosed2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-umbrella-closed-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6.697 12.071l11.313 -7.071l-7.07 11.314l-4.243 -4.243" />
    <path d="M8.743 14.475l-2.121 2.121c-1.886 1.886 .943 4.715 2.828 2.829" />
  </svg>
  );
};

export default IconUmbrellaClosed2;