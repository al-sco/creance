
import { forwardRef } from "react";
import { Form, InputGroup } from "react-bootstrap";
import InputLabel from "./InputLabel.tsx";

interface InputProps {
  id: string;
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  containerClassName?: string;
  className?: string;
  name?: string;
  value?: string;
  type?: string;
  onBlur?: () => void;
  ref?: React.Ref<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  restProps?: any;
  error?: string;
  before?: React.ReactNode;
  after?: React.ReactNode;
  placeholder?: string;
  defaultValue?: string;
  formGroupClassName?: string;
}


const InputField = forwardRef((props: InputProps, ref?: any) => {
  const {
    id,
    label,
    description,
    required,
    containerClassName,
    className,
    error,
    before, after,
    onChange,
    type = "text",
    value,
    placeholder,
    defaultValue,
    formGroupClassName,
    ...rest
  } = props;

  return (

    <div className={`flex-column gap-2 ${containerClassName} ${className}`} ref={ref}>
      

      <InputGroup className={`p-inputgroup ${formGroupClassName}`}>
        {before}
        <InputLabel id={id} label={label} required={required} />
        <Form.Control
          id={id}
          aria-describedby={`${id}-help`}
          className={`p-inputtext-sm ${error ? 'isInvalid' : ''}  border-green-300`}
          required={required}
          onChange={onChange}
          value={value}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          isInvalid={!!error}
          {...rest}
        />
        {after}
      </InputGroup>

      {description && <Form.Text id={`${id}-help`} className="text-muted">{description}</Form.Text>}
      {error && <Form.Text className="text-danger">{error}</Form.Text>}
    </div>
  );
});

export default InputField;
