
import { Icon } from "@iconify/react/dist/iconify.js";
import AtlAddButton from "../buttons/AddButton.tsx";

import SearchInputField from "../form/SearchInputField.tsx";

interface SerchAndAddButtonProps {
    onAdd?: () => void;
    onFilter?: (event: any) => void;
    label?: string;
    onClick?: () => void;
}

export default function SerchAndAddButton({
    onAdd,
    onFilter,
    onClick,
    label = 'Ajouter',
}: SerchAndAddButtonProps) {
    return (<>
        <div className={'d-flex justify-content-between mb-3'} >
            <div className=" d-flex items-end">
                <SearchInputField onChange={onFilter} />
                <div className="pl-5">
               
                <Icon icon="mdi:refresh" className="refresh-icon hover:bg-blue-200 rounded" 
                style={{fontSize: 32, cursor: "pointer", transition: "transform 0.4s ease"}} onClick={onClick}/>
                </div>
            </div>
            <AtlAddButton label={label} onClick={onAdd} />
        </div>
    </>);
}
