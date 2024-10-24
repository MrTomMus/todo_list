import { Box, Button, Flex, IconButton, Input, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {  useState } from "react";
import { Task } from "src/features/Task";
import { CounterTask } from "src/features/CounterTask";
import { TaskObj } from "src/shared/api";

interface TodoListProps {
    tasks: TaskObj[]
}

export const TodoList = ({tasks}:TodoListProps) => {

    const { colorMode, toggleColorMode } = useColorMode();
    const [ value, setValue ] = useState('');


    const taskElements = tasks.map((elem) => (
        <Task title={elem.title} key={elem.id} />
    ));

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
                    <Button>
                        <CounterTask counter={tasks.length} />
                        Все задачи
                    </Button>
                    <Button>
                        <CounterTask counter={100} />
                        Выполненые
                    </Button>
                    <Button>
                        <CounterTask counter={12} />
                        В процессе
                    </Button>
                </Flex>
                {taskElements}
            </Flex>
        </Box>
    )
}