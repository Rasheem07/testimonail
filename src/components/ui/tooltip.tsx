import React from 'react';

const Tooltip = ({ text, visible }: {text: string; visible: boolean}) => {
  if (!visible) return null;

  return (
    <div
      className={`md:hidden absolute bg-gray-800 text-white text-xs rounded rounded-bl-none py-1 left-1/4 mb-6 px-2 z-10`}
      style={{ 
        transform: 'translateY(-100%)', 
        whiteSpace: 'nowrap', // Add some space below the tooltip
      }}
    >
      {text}
    </div>
  );
};

export default Tooltip;
