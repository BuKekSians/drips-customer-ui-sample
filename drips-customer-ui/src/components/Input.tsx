import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-drips-grey text-sm font-medium mb-2">
        {label}
      </label>
      <input
        {...props}
        className={`input-field ${error ? 'border-red-500' : ''} ${props.className || ''}`}
      />
      {error && (
        <p className="mt-1 text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
};

export default Input;
