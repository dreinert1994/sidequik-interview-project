import React from 'react';
import EditableInput from './EditableInput';

type EditableTextInputProps = {
  name: string;
  value: string;
  inputRef: React.RefObject<HTMLInputElement>
  onChange: (value: string) => void;
  placeholder: string;
  additionalClasses?: string[];
  textColor?: string;
}

const EditableTextInput: React.FC<EditableTextInputProps> = ({ name, value, inputRef, onChange, placeholder, additionalClasses, textColor }) => {

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
    childRef={inputRef}
    type="input"
    additionalClasses={additionalClasses}
    textColor={textColor}
  >
    <input
      ref={inputRef}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      className={cssClasses}
      onChange={e => onChange(e.target.value)}
    />
  </EditableInput>
}

export default EditableTextInput;