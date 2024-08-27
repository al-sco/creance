import { Box } from "@chakra-ui/react"

export type MultiComponentsBuilderItem = {
    child: JSX.Element
} 

type MultiComponentsBuilderProps = {
    children: MultiComponentsBuilderItem[]
}

const MultiComponentsBuilder = (data: MultiComponentsBuilderProps) => {
    return (data.children.map((child) => <Box padding='1rem 0 1rem 0'>
        {child.child}
    </Box>));
}

export default MultiComponentsBuilder 