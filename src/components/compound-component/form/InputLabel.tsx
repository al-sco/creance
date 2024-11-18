

interface InputLabelProps {
    id: string;
    label?: string;
    required?: boolean;
}

export default function InputLabel({
    label, id, required
}: InputLabelProps) {

    return (
        <>
            <label className="font-bold" htmlFor={id}>{label} <span className={'text-danger'}>{required && '*'}</span> &nbsp;
            </label>
        </>
    );
}
