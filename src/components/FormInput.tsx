import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface BaseProps {
  label: string;
  required?: boolean;
  error?: string;
}

type InputProps = BaseProps & { textarea?: false } & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = BaseProps & { textarea: true } & TextareaHTMLAttributes<HTMLTextAreaElement>;
type FormInputProps = InputProps | TextareaProps;

export default function FormInput(props: FormInputProps) {
  if (props.textarea) {
    const { label, required, error, textarea, className, ...textareaProps } = props;

    return (
      <label className="block text-[14px] text-[#23244a]">
        <span className="mb-2 block font-medium">
          {label}
          {required ? ' *' : ''}
        </span>
        <textarea
          {...textareaProps}
          className={`w-full border border-[#ced4da] bg-white px-3 py-3 text-sm outline-none focus:border-[#ffc219] ${className ?? ''}`}
        />
        {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
      </label>
    );
  }

  const { label, required, error, textarea, className, ...inputProps } = props;

  return (
    <label className="block text-[14px] text-[#23244a]">
      <span className="mb-2 block font-medium">
        {label}
        {required ? ' *' : ''}
      </span>
      <input
        {...inputProps}
        className={`h-[50px] w-full border border-[#ced4da] bg-white px-3 text-sm outline-none focus:border-[#ffc219] ${className ?? ''}`}
      />
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}


