type ButtonType = "submit" | "button";

interface Props {
  type: ButtonType;
  variant?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  value: string;
}
export default function Button(props: Props) {
  const { type, variant, onClick, isDisabled, value } = props;
  return (
    <button type={type} className={!isDisabled ? variant : "disabled"} onClick={onClick} disabled={isDisabled}>
      {value}
    </button>
  );
}
