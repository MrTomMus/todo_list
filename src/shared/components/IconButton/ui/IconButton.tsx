import { Button } from "@chakra-ui/react"

interface IconButton {
    children: React.ReactNode, // TODO Разобратсья в типизации
    handleButton: (id:string) => void,
    id: string

}

export const IconButton =  ({children, handleButton, id}:IconButton) => {
    return (
        <Button onClick={() => handleButton(id)} p="0" m="5px">
           {children}
        </Button>
    )
}