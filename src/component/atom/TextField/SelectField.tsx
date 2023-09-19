interface Props {
  label?: string;
  error?: boolean;
  options?: [] | null;
  helperText?: string;
  onChange: () => void;
}

export default function SelectField(props: Props) {
  const { label, error, options, helperText, onChange } = props;
  return (
    <div className={error ? "text__field error" : "text__field"}>
      {label ? <label>{label}</label> : null}
      <select onChange={onChange}>
        {options?.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      {helperText ? <label>{helperText}</label> : null}
    </div>
  );
}
