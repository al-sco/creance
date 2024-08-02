import { useEffect, useState, } from "react"
import { SelectItem } from "../common/configs/ui/creance/creance.type"
import { Select, Spinner } from "@chakra-ui/react"
import { ErrorBoundary } from "react-error-boundary"
import { useSignals } from "@preact/signals-react/runtime"
import colors from "../common/theme/colors/colors"
import styled from "styled-components"


type SelectItemProps={
    promisedSelectItems:()=>Promise<SelectItem[]>
    onSelectChanged:(value:string)=>void
}


export const SelectableItem = ({promisedSelectItems,onSelectChanged}:SelectItemProps) => {
    useSignals()
    let [isLoading, setLoading] = useState(true)
    let [selectItems, setSelectItems] = useState<SelectItem[]>([])
    useEffect(() => {
        if(promisedSelectItems){
            promisedSelectItems().then((selectItems) => {
                setSelectItems(() => selectItems)
                setLoading(() => false)
            })
        }
    }, [])


    if (isLoading) {
        return <Spinner m={2}/>
    }
    return (
        <ErrorBoundary  fallback={<span>error</span>}> 
        <Select style={{border:`2px solid ${colors.white}`}} backgroundColor={colors.background} placeholder="Selectionner" onChange={(e)=>onSelectChanged(e.target.value)}>
            {selectItems.map((s: SelectItem) => <option value={s.value}>{s.title}</option>
            )}
        </Select>
        </ErrorBoundary>
    )
}
