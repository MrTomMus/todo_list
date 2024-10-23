import { Button, Image } from "@chakra-ui/react"

interface IconButton {
    imgSrc: string, // TODO Разобратсья в типизации
    hundleButton?: (type:string) => void,
}

export const IconButton = ({imgSrc,  }:IconButton) => {
    return (
        <Button p="0" m="5px">
           <Image w="25px" src={imgSrc} />  
        </Button>
    )
}