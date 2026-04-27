import React from 'react';

interface IconCreditCardHandProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCreditCardHand: React.FC<IconCreditCardHandProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-credit-card-hand ${defaultSize} ${userClassName}`.trim();

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
    <path d="M2 4h9.914a3 3 0 0 1 1.92 .695l5.166 4.305" />
    <path d="M11.15 9h8.85a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-13a2 2 0 0 1 -2 -2v-8.7" />
    <path d="M3 8l7.2 4.7a1.803 1.803 0 0 0 2 -3l-4.2 -2.7" />
    <path d="M5 16h17" />
  </svg>
  );
};

export default IconCreditCardHand;