
import {  ReactNode } from 'react';

interface TabsContentProps{
    actions?: ReactNode,
    children: ReactNode
}
export default function TabsContent({actions, children}: TabsContentProps) {

    return (
        <div className="card border-none">
            <div className="flex mb-2 gap-2 justify-content-end">
                {actions}
            </div>
                {children}
        </div>
    )
}
        