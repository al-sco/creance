import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { SelectItemOptionsType } from "primereact/selectitem";
import InputLabel from "./InputLabel.tsx";
import { forwardRef } from "react";
import { InputGroup } from "react-bootstrap";

interface SelectProps {
  value?: any;
  onChange?: (value: DropdownChangeEvent) => void;
  options?: SelectItemOptionsType;
  placeholder?: string;
  id: string;
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  containerClassName?: string;
  optionLabel?: string;
  optionValue?: string;
  filterBy?: string;
  defaultValue?: string;
  showClear?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  error?: string;
  onClear?: () => void;
  formGroupClassName?: string;
  dropdownClassName?: string;
  labelStyles?: any;
}

export const SeletectField = forwardRef(
  (
    {
      value,
      options,
      onChange,
      id,
      label,
      description,
      required,
      disabled,
      containerClassName,
      before,
      after,
      optionLabel,
      optionValue,
      defaultValue,
      placeholder,
      filterBy,
      error,
      formGroupClassName,
      dropdownClassName,
      labelStyles,
    }: SelectProps,
    ref?: any
  ) => {
    return (
      <div className={` d-flex ${containerClassName} align-items-center`}>
        <div className="mr-2" style={{ width: labelStyles }}>
          <InputLabel id={id} label={label} required={required} />
        </div>
        <InputGroup
          className={`d-flex p-inputgroup ${formGroupClassName}`}
          ref={ref}
          style={{ marginTop: -2 }}
        >
          {before}
          <Dropdown
            value={value}
            onChange={onChange}
            options={options}
            optionLabel={optionLabel}
            optionValue={optionValue}
            defaultValue={defaultValue}
            filter={true}
            filterBy={filterBy || optionLabel || "label"}
            showClear={value}
            placeholder={placeholder}
            className={`w-full p-inputtext-sm ${dropdownClassName} ${
              error && "p-invalid"
            } border border-green-300 `}
            id={id}
            aria-describedby={`${id}-help`}
            required={required}
            disabled={disabled}
            style={{ marginTop: -17 }}
          />

          {after}
        </InputGroup>

        {description && <small id={`${id}-help`}>{description}</small>}
        {error && <small className={"text-danger"}>{error}</small>}
      </div>
    );
  }
);
export default SeletectField;
