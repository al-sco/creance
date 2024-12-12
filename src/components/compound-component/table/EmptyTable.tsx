import emptyImage from "../../../assets/empty2.jpg"

interface EmptyTableProps {
    title?: string;
    subTitle?: string;
    footer?: React.ReactNode;
    image?: string;
    dashbord?: boolean;
}

export default function EmptyTable({
                                       title = "Aucune donnée disponible",
                                       subTitle = "Vous n'avez pas encore ajouté de données",
                                       footer,
                                       image, 
                                       dashbord
                                   }: EmptyTableProps) {
                                    const src = image ? image : emptyImage
    return (
        <div className={'flex flex-column text-center align-items-center gap-2'}>
            {
                !dashbord && <img src={`${src}`} className={'w-16'} alt={'empty image'} style={{width: 160}}/>
            }
            
            <h3 className={'text-xl'}>{title}</h3>
            <p className={'text-muted'}>{subTitle}</p>
            {footer}
        </div>
    )
}
