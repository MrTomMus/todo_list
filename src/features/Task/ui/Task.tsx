import { Box, Flex, useColorMode } from "@chakra-ui/react"
import { ReactComponent as Edit } from "src/shared/assets/icons/edit.svg"
import {ReactComponent as Basket } from "src/shared/assets/icons/basket.svg"
import { IconButton } from "src/shared/components/IconButton"


interface TaskProps {
    title?: string,
    id: string,
    
}

export const Task = ({ title, id }: TaskProps) => {

    const { colorMode } = useColorMode();

    const strokeColor = colorMode === "dark" ? "white" : "black";

    const handleEdit = (type:string) => {
        console.log(type)
    }

    const handleDelete = (type:string) => {
        console.log(type)
    }

    return (
        <Flex 
            
            maxW="800px" 
            w="100%" 
            border="1px solid gray" 
            borderRadius="25px"
            align="center"
            justify="space-between"
            p="15px 35px"
            boxSizing="border-box"
            >
            <Box maxW="600px" w="100%" wordBreak="normal">
            {title}
            </Box>
            <Flex>
                <IconButton id={id} handleButton={handleEdit}>
                    <Edit stroke={strokeColor}  />
                </IconButton>
                <IconButton id={id} handleButton={handleDelete}>
                    <Basket stroke={strokeColor} />
                </IconButton>
            </Flex>
        </Flex>
    )
}