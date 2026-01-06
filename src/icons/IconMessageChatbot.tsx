import React from 'react';

interface IconMessageChatbotProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMessageChatbot: React.FC<IconMessageChatbotProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-message-chatbot ${defaultSize} ${userClassName}`.trim();

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
    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" />
    <path d="M9.5 9h.01" />
    <path d="M14.5 9h.01" />
    <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
  </svg>
  );
};

export default IconMessageChatbot;