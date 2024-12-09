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
                                    const src = image ? image : "/empty.svg"
    return (
        <div className={'flex flex-col text-center items-center gap-2'}>
            {
                !dashbord && <img src={`${src}`} className={'w-32'} alt={'empty image'} />
            }
            
            <h3 className={'text-xl'}>{title}</h3>
            <p className={'text-muted'}>{subTitle}</p>
            {footer}
        </div>
    )
}
