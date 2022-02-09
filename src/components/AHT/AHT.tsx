import React, { TextareaHTMLAttributes } from 'react';
import autosize from 'autosize';

export type ITextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const AHT: React.FC<ITextAreaProps> = ({ children, ...props }) => {
  return (
    <textarea className="aht" ref={(element) => autosize(element)} {...props}>
      {children}
    </textarea>
  );
};

export default AHT;
