import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import colors from "../common/theme/colors/colors";


type DrawerProps = {
    title: string
    child: JSX.Element
}

export const DrawerComponent = ({ child, title }: DrawerProps): JSX.Element => {
    // const btnRef = React.useRef();        
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button colorScheme='undefined' style={{ color: colors.white, backgroundColor: colors.bleu, margin: '0 0.5rem 0 0.5rem' }} onClick={onOpen}>
                {title}
            </Button>

            <Drawer
                id="drawer"
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                variant='secondary'
            // finalFocusRef={btnRef}                
            >
                <DrawerOverlay />
                <DrawerContent backgroundColor={colors.background}>
                    <DrawerCloseButton />
                    <DrawerHeader>{title}</DrawerHeader>
                    <DrawerBody>
                        {child}
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Fermer
                        </Button>
                        <Button colorScheme='blue'>Enregistrer</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}