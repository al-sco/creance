
import { InputTextarea } from "primereact/inputtextarea";
import NdInputLabel from "./InputLabel.tsx";
import { forwardRef } from "react";

interface TextAreaProps {
    id: string;
    label?: string;
    description?: string;
    required?: boolean;
    disabled?: boolean;
    containerClassName?: string;
    error?: string,
    row?: number,
    cols?: number
}


const InputsTextarea = forwardRef(({ id, label, error, description, required, disabled, containerClassName, row, cols, ...rest }: TextAreaProps, ref?: any) => {
    return (
        <div className={`d-flex flex-column gap-2 ${containerClassName}`} ref={ref}>
            <NdInputLabel id={id} label={label} required={required} />
            <InputTextarea id={id} aria-describedby={`${id}-help`} className={`p-inputtext-sm ${error && 'p-invalid'} border border-blue-200 `}
                required={required} disabled={disabled} rows={row ? row : 5} cols={cols ? cols : 30} {...rest} />
            {description && <small id={`${id}-help`} >
                {description}
            </small>}
            {error && <small className={'text-danger'}>{error}</small>}
        </div>
    );

});
export default InputsTextarea;