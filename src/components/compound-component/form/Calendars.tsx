import NdInputLabel from "./InputLabel.tsx";
import { Calendar } from "primereact/calendar";
import { forwardRef } from "react";

interface CustomCalendarProps {
  value?: any;
  viewDate?: any;
  onChange?: (value: any) => void;
  placeholder?: string;

  id: string;
  label?: string;

  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  name?: string;
  onBlur?: () => void;

  error?: string;
  containerClassName?: string;
  selectionMode?: "single" | "multiple" | "range" | undefined;
  before?: React.ReactNode;
  after?: React.ReactNode;
  readonly?: boolean;
  dateFormat?: string;
}

const Calendars = forwardRef(
  (
    {
      id,
      label,
      description,
      before,
      after,
      readonly,
      error,
      required,
      containerClassName,
      selectionMode = "single",
      dateFormat = "dd M yy",
      viewDate,
      value,
      disabled,
      ...rest
    }: CustomCalendarProps,
    ref?: any
  ) => {
    return (
      <div
        className={`flex-column gap-2  mt-2 ${containerClassName}`}
        ref={ref}
      >
        <div className="p-inputgroup" style={{ marginTop: -10 }}>
          <div style={{ width: 200 }}>
            <NdInputLabel id={id} label={label} required={required} />
          </div>

          {before}
          <Calendar
            id={id}
            aria-describedby={`${id}-help`}
            selectionMode={selectionMode}
            className={`w-full p-inputtext-sm" ${
              error && "p-invalid"
            } border border-green-300 mt-1 ${disabled && "bg-gray-300"}`}
            dateFormat={dateFormat}
            required={required}
            readOnlyInput={readonly}
            viewDate={viewDate}
            disabled={disabled}
            value={value && new Date(value)}
            {...rest}
            style={{ height: 36 }}
          />
          {after}
        </div>

        {description && <small id={`${id}-help`}>{description}</small>}
        {error && <small className={"text-danger"}>{error}</small>}
      </div>
    );
  }
);

export default Calendars;
