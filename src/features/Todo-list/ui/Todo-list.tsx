import { Box, Button, Flex, IconButton, Input, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Task } from "src/features/Task";




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
            <Flex gap="20px" p="100px 50px 0 50px" direction="column" justify="center" align="center">
                <Input onChange={(e) => setValue(e.currentTarget.value)} maxW="500px" placeholder="Введите вашу задачу" value={value} />
                <Flex maxW="500px" w="100%" justify="space-between">
                    <Button>Все задачи</Button>
                    <Button>Выполненые</Button>
                    <Button>В процессе</Button>
                </Flex>
                <Task />
            </Flex>

        </Box>
    )
}