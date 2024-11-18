
interface SectionTitleProps{
    title: string;
    subTitle?: string;
    className?: string;
}

export function SectionTitle({title,  subTitle, className}: SectionTitleProps){
    return(
         <div className={`bg-orange-50 border-none pt-3 pl-4 mt-4 ${className}`}>
            <div className="font-bold">{title}</div>
            <p className="text-muted" style={{fontSize: 13}}>{subTitle}</p>
         </div>
    )
}