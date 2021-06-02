import React from 'react';
import EditableInput from './EditableInput';

type EditableTextAreaProps = {
  name: string;
  value: string;
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  placeholder: string;
  onChange: (value: string) => void;
  additionalClasses?: string[];
  textColor?: string
}

const EditableTextArea: React.FC<EditableTextAreaProps> = ({ name, value, textAreaRef, onChange, placeholder, additionalClasses, textColor }) => {
  
  let cssClasses = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300';
  if (additionalClasses) {
    const classString = additionalClasses.join(" ");
    cssClasses += ` ${classString}`;
  }

  if (textColor) {
    cssClasses += `${textColor}`;
  }

  return <EditableInput
    text={value}
    placeholder={placeholder}
    childRef={textAreaRef}
    type="textarea"
    additionalClasses={additionalClasses}
    textColor={textColor}
  >
    <textarea
      ref={textAreaRef}
      name={name}
      className={cssClasses}
      placeholder={placeholder}
      rows={5}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </EditableInput>
}

export default EditableTextArea