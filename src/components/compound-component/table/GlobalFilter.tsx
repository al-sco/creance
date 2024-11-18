import {useCallback, useState} from "react";

export function useTableGlobalFilter(initialState = "") {
    const [value, setValue] = useState(initialState);
    const handleFilter = useCallback((event: any) => {
        const value = event.target.value;
        setValue(value || '');
    }, []);

    return {
        value, handleFilter
    }
}
