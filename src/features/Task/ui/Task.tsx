import { Box, Flex, useColorMode } from "@chakra-ui/react"

import { ReactComponent as Edit } from "src/shared/assets/icons/edit.svg"
import {ReactComponent as Basket } from "src/shared/assets/icons/basket.svg"
import { IconButton } from "src/shared/components/IconButton"


interface TaskProps {
    title?: string,
}

export const Task = ({ title }: TaskProps) => {

    const { colorMode } = useColorMode();

    const strokeColor = colorMode === "dark" ? "white" : "black";

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
                <IconButton>
                    <Edit stroke={strokeColor} />
                </IconButton>
                <IconButton>
                    <Basket stroke={strokeColor} />
                </IconButton>
            </Flex>
        </Flex>
    )
}