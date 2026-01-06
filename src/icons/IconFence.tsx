import React from 'react';

interface IconFenceProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFence: React.FC<IconFenceProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-fence ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 12v4h16v-4l-16 0" />
    <path d="M6 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" />
    <path d="M14 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" />
  </svg>
  );
};

export default IconFence;