import { CreateToastFnReturn } from "@chakra-ui/react"
import colors from "../theme/colors/colors"

type SuccesMessage = {
    title?: string,
    description?: string
}

export const toastify = (toast: CreateToastFnReturn, fn: Promise<any>,successMessage?: SuccesMessage ) => {
    toast.promise(
        fn, {
        success: {
            title: successMessage?.title?? 'Super', description: successMessage?.description?? 'Modification enregistée', containerStyle: {
                borderRadius: '12px',
                backgroundColor: `${colors.green} !important`,
            },
            colorScheme: 'none'
        },
        error: {
            title: 'Oups', description: "Une erreur c'est produite", containerStyle: {
                borderRadius: '12px',
                backgroundColor: `${colors.red} !important`,
            },
            colorScheme: 'none'
        },
        loading: {
            title: 'En cours', containerStyle: {
                borderRadius: '12px',
                backgroundColor: `${colors.bleu} !important`,
            },
            colorScheme: 'none'
        },
    })
}