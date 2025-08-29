import React, { useState, useRef, useLayoutEffect } from 'react';
import './ExpandableText.css'; 

export const ExpandableText = ({ text, maxHeight }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (textRef.current) {
      const isHeightOverflowing = textRef.current.scrollHeight > maxHeight;
      setIsOverflowing(isHeightOverflowing);
    }
  }, [text, maxHeight]);

  const toggleExpand = (e) => {
    e.stopPropagation(); 
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="SN-expandable-text-container">
      <span
        ref={textRef}
        className="SN-expandable-text-content"
        style={{
          maxHeight: isExpanded ? `${textRef.current?.scrollHeight}px` : `${maxHeight}px`
        }}
      >
        {text}
      </span>
       {isOverflowing && (
        <button onClick={toggleExpand} className="SN-expand-toggle-btn">
          {isExpanded ?'Show Less' : '...Read More'}
        </button>
      )}
    </div>
  );
};