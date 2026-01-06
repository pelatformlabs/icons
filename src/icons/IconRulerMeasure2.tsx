import React from 'react';

interface IconRulerMeasure2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRulerMeasure2: React.FC<IconRulerMeasure2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ruler-measure-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 19.875c0 .621 -.512 1.125 -1.143 1.125h-5.714a1.134 1.134 0 0 1 -1.143 -1.125v-15.875a1 1 0 0 1 1 -1h5.857c.631 0 1.143 .504 1.143 1.125l0 15.75" />
    <path d="M12 9h-2" />
    <path d="M12 6h-3" />
    <path d="M12 12h-3" />
    <path d="M12 18h-3" />
    <path d="M12 15h-2" />
    <path d="M21 3h-4" />
    <path d="M19 3v18" />
    <path d="M21 21h-4" />
  </svg>
  );
};

export default IconRulerMeasure2;