import { Button } from "@chakra-ui/react"

interface IconButton {
    children: React.ReactNode, // TODO Разобратсья в типизации
    hundleButton?: (type:string) => void,

}

export const IconButton = ({children}:IconButton) => {
    return (
        <Button p="0" m="5px">
           {children}
        </Button>
    )
}