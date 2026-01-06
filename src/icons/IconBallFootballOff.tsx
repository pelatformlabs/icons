import React from 'react';

interface IconBallFootballOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBallFootballOff: React.FC<IconBallFootballOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ball-football-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.041 16.046a9 9 0 0 0 -12.084 -12.09m-2.323 1.683a9 9 0 0 0 12.726 12.73" />
    <path d="M12 7l4.755 3.455l-.566 1.743l-.98 3.014l-.209 .788h-6l-1.755 -5.545l1.86 -1.351l2.313 -1.681l.582 -.423" />
    <path d="M12 7v-4" />
    <path d="M15 16l2.5 3" />
    <path d="M16.755 10.455l3.745 -1.455" />
    <path d="M9.061 16.045l-2.561 2.955" />
    <path d="M7.245 10.455l-3.745 -1.455" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBallFootballOff;