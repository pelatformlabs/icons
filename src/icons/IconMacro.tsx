import React from 'react';

interface IconMacroProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMacro: React.FC<IconMacroProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-macro ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 15a6 6 0 1 0 12 0" />
    <path d="M18 15a6 6 0 0 0 -6 6" />
    <path d="M12 21a6 6 0 0 0 -6 -6" />
    <path d="M12 21v-10" />
    <path d="M12 11a5 5 0 0 1 -5 -5v-3l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -5 5" />
  </svg>
  );
};

export default IconMacro;