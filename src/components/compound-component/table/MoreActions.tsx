
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { useRef } from "react";
import { Button } from "react-bootstrap";

interface TableActionsProps {
    items: MenuItem[];
    label?: string;
    accent?: boolean;
}

function MoreActions({items, label, accent}: TableActionsProps) {
    const menuRight = useRef(null);
    let severity: any = 'primary';
    if (accent) severity = 'info';

    let clas: any = 'p-button-text';
    if (accent) clas = '';

    return (
        <>
            <Menu model={items} ref={menuRight} popup popupAlignment="right" id="menuSelector" className="m-0 "/>
            <Button  className={clas+"bg-orange-200 border-none text-black"} 
                    onClick={(event) =>
                menuRight.current && (menuRight.current as any).toggle(event)} aria-haspopup id="options" style={{marginLeft: -5}}>...</Button>
        </>
    );
}


export default MoreActions;