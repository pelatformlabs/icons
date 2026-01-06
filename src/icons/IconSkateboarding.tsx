import React from 'react';

interface IconSkateboardingProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSkateboarding: React.FC<IconSkateboardingProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-skateboarding ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M5.5 15h3.5l.75 -1.5" />
    <path d="M14 19v-5l-2.5 -3l2.5 -4" />
    <path d="M8 8l3 -1h4l1 3h3" />
    <path d="M17.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" fill="currentColor" />
    <path d="M3 18c0 .552 .895 1 2 1h14c1.105 0 2 -.448 2 -1" />
    <path d="M6.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" fill="currentColor" />
  </svg>
  );
};

export default IconSkateboarding;