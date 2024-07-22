import { List } from "@chakra-ui/react"
import { SelectItem } from "../../common/configs/ui/creance/creance.type"
import SearchResultItem from "./search-result-item"

type SearchResultBuilderProps = {
    results: SelectItem[]
    onResultPressed: (result: SelectItem) => void
}

const SearchResultBuilder = ({ results, onResultPressed }: SearchResultBuilderProps) => {
    return (
        <List spacing={3}>
            {
                results.map((result) => (<SearchResultItem selectItem={result} onPressed={onResultPressed} />))
            }
        </List>
    )
}

export default SearchResultBuilder