import React from 'react';

interface IconBrandVisualStudioProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandVisualStudio: React.FC<IconBrandVisualStudioProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-visual-studio ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1l0 -8" />
  </svg>
  );
};

export default IconBrandVisualStudio;