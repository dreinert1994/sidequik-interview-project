import React, { useState, useEffect } from "react";
import "./EditableInput.css";

type EditableProps = {
  text: string;
  type: "input" | "textarea";
  placeholder?: string;
  childRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
} 

const Editable: React.FC<EditableProps> = ({
  text,
  type,
  placeholder,
  children,
  childRef,
  ...props
}) => {
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    const keys = ["Escape", "Tab"];
    const enterKey = "Enter";
    const allKeys = [...keys, enterKey];
    if (
      (type === "textarea" && keys.indexOf(key) > -1) ||
      (type !== "textarea" && allKeys.indexOf(key) > -1)
    ) {
      setEditing(false);
    }
  };

  return (
    <section {...props}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={handleKeyDown}
        >
          {children}
        </div>
      ) : (
        <div
          className={`rounded py-2 px-3 text-gray-700 leading-tight whitespace-pre-wrap hover:shadow-outline editable-${type}`}
          onClick={() => setEditing(true)}
        >
            <span
              className={`${text ? "text-black" : "text-gray-500"}`}
            >
            {text || placeholder || ""}
          </span>
        </div>
      )}
    </section>
  );
};

export default Editable;