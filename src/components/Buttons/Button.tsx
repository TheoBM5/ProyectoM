import './button.css';

const STYLES = [
  'button-accept',
  'button-green',
  'button-red',
  'button-orange',
  'button-yellow',
];

interface ButtonProps {
  type: string;
  text: string;
  onClick?: () => void;
  submit?: "submit" | "button" | "reset";
  name?: string;
}

export function Button({ type, text, onClick, submit = 'button', name }: ButtonProps) {
  const buttonStyle = STYLES.includes(type) ? type : STYLES[0];

  return (
    <button
      type={submit}
      className={`normal-buttons ${buttonStyle}`}
      onClick={onClick}
      name={name}
    >
      {text}
    </button>
  );
}

