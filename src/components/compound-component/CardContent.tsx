import { ReactNode } from "react";

interface CardContentProps {
    children: ReactNode
}
export function CardContent({ children }: CardContentProps) {
    return (
        <div className="ml-5 mr-5 mb-5 card p-4 border-none">
            {children}
        </div>
    )
}