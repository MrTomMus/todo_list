import { Box, Flex, IconButton, Input, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const TodoList = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const [ value, setValue ] = useState('');

    return (
        <Box >
            <IconButton 
                position="absolute" 
                right="1vw" 
                top="1vh" 
                aria-label="Toggle theme"
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                onClick={toggleColorMode}
                variant="ghost" />
            <Flex p="100px 50px 0 50px" justify="center">
                <Input onChange={(e) => setValue(e.currentTarget.value)} maxW="500px" placeholder="Введите вашу задачу" value={value} />
            </Flex>
        </Box>
    )
}