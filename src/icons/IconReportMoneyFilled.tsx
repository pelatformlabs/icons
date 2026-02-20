import React from 'react';

interface IconReportMoneyFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconReportMoneyFilled: React.FC<IconReportMoneyFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-report-money-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M17.997 4.17a3 3 0 0 1 2.003 2.83v12a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 2.003 -2.83a4 4 0 0 0 3.997 3.83h4a4 4 0 0 0 3.98 -3.597zm-5.997 5.83a1 1 0 0 0 -1 1v.05a2.5 2.5 0 0 0 .5 4.95h1a.5 .5 0 1 1 0 1h-2.5a1 1 0 0 0 0 2h1a1 1 0 0 0 2 0v-.05a2.5 2.5 0 0 0 -.5 -4.95h-1a.5 .5 0 1 1 0 -1h2.5a1 1 0 0 0 0 -2h-1a1 1 0 0 0 -1 -1m2 -8a2 2 0 1 1 0 4h-4a2 2 0 1 1 0 -4z" />
  </svg>
  );
};

export default IconReportMoneyFilled;