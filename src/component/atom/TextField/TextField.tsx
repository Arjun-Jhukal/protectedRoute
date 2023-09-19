import React from "react";

type FieldType = "input" | "select" | "textarea";
type InputType = "text" | "email" | "password" | "date" | "number" | "url";

interface Props {
  label?: string;
  fieldType?: FieldType;
  inputType?: InputType;
  value?: string | number;
  onChange?: () => void;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  rows?: number;
  options?: [];
  name?: string;
}

export default function TextField(props: Props) {
  const { label, fieldType, inputType, value, onChange, placeholder, error, helperText, rows, name } = props;

  switch (fieldType) {
    case "input":
      return (
        <div className={error ? "text__field error" : "text__field"}>
          {label ? <label>{label}</label> : null}
          <input name={name} type={inputType} value={value} onChange={onChange} placeholder={placeholder || ""} />
          {helperText ? <label>{helperText}</label> : null}
        </div>
      );
    case "textarea":
      return (
        <div className={error ? "text__field error" : "text__field"}>
          {label ? <label>{label}</label> : null}
          <textarea name={name} rows={rows} style={{ width: "100%" }} value={value} onChange={onChange} placeholder={placeholder || ""}></textarea>
          {helperText ? <label>{helperText}</label> : null}
        </div>
      );

    default:
      return (
        <div className="text__field">
          <input type="text" value={value} onChange={onChange} placeholder={placeholder || ""} />
          {helperText ? <label>{helperText}</label> : null}
        </div>
      );
  }
}
