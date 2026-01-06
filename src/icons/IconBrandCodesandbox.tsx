import React from 'react';

interface IconBrandCodesandboxProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandCodesandbox: React.FC<IconBrandCodesandboxProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-codesandbox ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25l4 2.25" />
    <path d="M12 12l4 -2.25l4 -2.25" />
    <path d="M12 12l0 9" />
    <path d="M12 12l-4 -2.25l-4 -2.25" />
    <path d="M20 12l-4 2v4.75" />
    <path d="M4 12l4 2l0 4.75" />
    <path d="M8 5.25l4 2.25l4 -2.25" />
  </svg>
  );
};

export default IconBrandCodesandbox;