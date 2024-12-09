import {InputText} from "primereact/inputtext";
import {Menu} from "primereact/menu";
import {useRef} from "react";
import {MenuItem} from "primereact/menuitem";
import { Button } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";


interface SerachInputProps {
    items?: MenuItem[],
    onChange?: (e: any) => void,
    placeholder?: string,
    width?: string,
    onClick?:()=> void;
}

const StyledInput = {
    backgroundColor: 'var(--gray-100)',
    border: '1px solid var(--gray-300)',
    width:  'auto',
    '&::placeholder': {
        color: '#000',
        opacity: 0.7,
    },
    '&:focus': {
        backgroundColor: 'var(--white)',
    }
};

export default function SearchInputField({
    items,
    onChange,
    placeholder,
    width
                                    }: SerachInputProps) {
    const menuLeft = useRef(null);

    const hasFilters = items && items.length > 0;

    return (
        <span className={'space-x-2'}>
            <span className="d-flex p-input-icon-left">
 
                <Icon icon="akar-icons:search" />
                <InputText
                    className={'form-control'}
                    placeholder={placeholder ||  '  Rechercher'}
                    onChange={onChange}
                    width={width}
                    style={StyledInput}
                />
            </span>

            {hasFilters && <>
                <Button  aria-label="Filter"
                        onClick={(event) => menuLeft.current && (menuLeft.current as any).toggle(event)}> 
                        <Icon icon="akar-icons:search"/> </Button>
                <Menu model={items} popup ref={menuLeft} id="popup_menu_left"/>
            </>}
        </span>
    );
}
