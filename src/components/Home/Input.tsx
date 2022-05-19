interface InputProps {
  value: string;
  onChange: (event) => void;
  onKeyPress: (event) => void;
}

export const Input = ({ value, onChange, onKeyPress }: InputProps) => {
  return (
    <input
      data-testid="input"
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyPress}
      placeholder="Tag..."
      className="p-4 w-full rounded-2xl border-2 border-zinc-900 drop-shadow-stroke"
    />
  );
};
