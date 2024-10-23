import { Box, Flex } from "@chakra-ui/react"

import edit from "src/shared/assets/icons/edit.svg"
import basket from "src/shared/assets/icons/basket.svg"
import { IconButton } from "src/shared/components/IconButton"


interface TaskProps {
    title?: string,
}

export const Task = ({ title }: TaskProps) => {
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
                <IconButton imgSrc={edit} />
                <IconButton imgSrc={basket} />
            </Flex>
        </Flex>
    )
}