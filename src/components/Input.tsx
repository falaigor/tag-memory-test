interface InputProps {
  value: string;
  onChange: (event) => void;
  onKeyDown: (event) => void;
}
export const Input = ({ value, onChange, onKeyDown }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="Here is example text"
      className="p-4 w-full rounded-2xl border-2 border-zinc-900 drop-shadow-stroke"
    />
  );
};
