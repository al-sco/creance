import { Icon } from "@iconify/react";
import { memo } from "react";
import { formatedDate } from "./format-date.ts";


interface KeyDetailProps {
    label: React.ReactNode;
}

function KeyDetail({ label }: KeyDetailProps) {
    return (
        <div className={'text-sm opacity-70'}>{label}</div>
    );
}

interface KeyValueDetailProps {
    label?: React.ReactNode;
    value: React.ReactNode;
    keySens?: 'top' | 'bottom';
    date?: boolean;
    sexe?: boolean;
    location?: boolean;
    building?: boolean;
    forTable?: boolean;
    withHours?: boolean;
    format?: string;
    classContent?: string;
    noIcon?: boolean
}

function KeyValueDetails(
    {
        label, value,
        keySens = 'top',
        date, location, building, forTable, withHours, classContent, noIcon
    }: KeyValueDetailProps) {
    const getValue = () => {
        if (date && withHours && typeof value === "string") return formatedDate(value, withHours)

        if (date && typeof value === "string") return formatedDate(value, withHours);
        return value;
    }


    const iconClass = "text-2xl opacity-50";
    const getIcon = () => {
        if (date && typeof value === "string")
            return <Icon icon="fa-solid:calendar-alt" className={iconClass} />;

        if (location && typeof value === "string")
            return <Icon icon="fa-solid:map-marked-alt" className={iconClass} />;

        if (building && typeof value === "string")
            return <Icon icon="fa-solid:building" className={iconClass} />;

        return !forTable && <Icon icon="fa-solid:dot-circle" className={iconClass} /> || <></>;
    }

    return (
        <>
            <div className={"d-flex items-center gap-4"}>
                {!noIcon && getIcon()}
                <div>
                    {!forTable && keySens === 'top' && <KeyDetail label={label} />}
                    <div className={`${!forTable && 'font-bold'}   ${classContent}`}>{getValue()}</div>
                    {!forTable && keySens === 'bottom' && <KeyDetail label={label} />}
                </div>
            </div>
        </>
    );
}

export default memo(KeyValueDetails);