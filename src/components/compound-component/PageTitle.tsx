
interface PageTitleProps{
    title: string
}
export function PageTitle({title}: PageTitleProps){
    return (
        <div className="mb-3 font-bold h5">{title}</div>
    )
}