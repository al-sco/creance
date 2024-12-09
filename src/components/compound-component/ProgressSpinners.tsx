import { ProgressSpinner } from "primereact/progressspinner";


export function ProgressSpinners() {
    return (
        <>
            <div className="d-flex justify-content-center refresh_button_progress_sprinner">
                <ProgressSpinner />
            </div>

            <div id={'spinner-container'} className={'d-flex justify-content-center  refresh_button_progress_sprinner_text shadow-round'}>
           

                <div>
                    <div className={'bg-blue-700 text-white border-l-4 border-blue-300 p-4 d-flex flex-row gap-4'}>
                    <div className={'spinner'}></div> Chargement en cours...</div>
                </div>
            </div>
            
        </>
    )
}