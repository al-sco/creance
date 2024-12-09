import {Toast} from "primereact/toast";
import AtlErrorDialog from "./ErrorDialog.tsx";
import {RefObject} from "react";
import {ConfirmPopup} from "primereact/confirmpopup";

interface AppAlertsProps {
    toast: RefObject<Toast>;
    errorVisible?: boolean;
    closeErrorAlert?: () => void;
    errorMessage?: string;
    tagKey?: string;
}


/**
 * AtlAlerts works with useAlerts hooks. You can implemnet like this:
 *
 * @param toast
 * @param errorVisible
 * @param closeErrorAlert
 * @param errorMessage
 * @param tagKey
 * @constructor
 */
function Alerts({
    toast, errorVisible, closeErrorAlert, errorMessage,
                   }: AppAlertsProps) {
    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup />

            <AtlErrorDialog visible={errorVisible} onHide={closeErrorAlert}>
                {errorMessage}
            </AtlErrorDialog>
        </>
    );
}

export default Alerts;
