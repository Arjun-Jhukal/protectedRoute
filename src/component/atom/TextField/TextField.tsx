import React from "react";

type FieldType = "input" | "select" | "textarea";
type InputType = "text" | "email" | "password" | "date" | "number" | "url";

interface Props {
  label?: string;
  fieldType?: FieldType;
  inputType?: InputType;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean;
  helperText?: string | undefined | false;
  rows?: number;
  options?: [];
  name?: string;
}

export default function TextField(props: Props) {
  const { label, fieldType, inputType, value, onChange, placeholder, error, helperText, rows, name } = props;

  switch (fieldType) {
    case "input":
      return (
        <div className="text__field">
          {label ? <label>{label}</label> : null}
          <input className={error ? "error" : ""} name={name} type={inputType} value={value} onChange={onChange} placeholder={placeholder || ""} />
          {helperText ? <label className="error">{helperText}</label> : null}
        </div>
      );
    case "textarea":
      return (
        <div className="text__field">
          {label ? <label>{label}</label> : null}
          <textarea
            className={error ? "error" : ""}
            name={name}
            rows={rows}
            value={value}
            onChange={onChange}
            placeholder={placeholder || ""}
          ></textarea>
          {helperText ? <label className="error">{helperText}</label> : null}
        </div>
      );

    default:
      return (
        <div className="text__field">
          {label ? <label>{label}</label> : null}

          <input className={error ? "error" : ""} type={inputType} name={name} value={value} onChange={onChange} placeholder={placeholder || ""} />

          {helperText ? <label className="error">{helperText}</label> : null}
        </div>
      );
  }
}
