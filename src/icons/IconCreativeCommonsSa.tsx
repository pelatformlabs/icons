import React from 'react';

interface IconCreativeCommonsSaProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCreativeCommonsSa: React.FC<IconCreativeCommonsSaProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-creative-commons-sa ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 16a4 4 0 1 0 -4 -4v1" />
    <path d="M6 12l2 2l2 -2" />
  </svg>
  );
};

export default IconCreativeCommonsSa;