import { Box, Button, Flex, IconButton, Input, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Task } from "src/features/Task";
import { CounterTask } from "src/features/CounterTask";
import { Info, TaskObj } from "src/shared/api/tasks/types";
import { createTask, getData, getDataCompleted, getDataInWork } from "src/shared/api/tasks/api";

interface TodoListProps {
    tasks: TaskObj[]
    setTasks: (tasks: []) => void,
    setInfo: (info: Info) => void,
    info?: Info, 
}

export const TodoList = ({tasks, setTasks, info, setInfo}:TodoListProps) => {

    const { colorMode, toggleColorMode } = useColorMode();
    const [ value, setValue ] = useState('');
    

    const taskElements = tasks.map((elem) => (
        <Task title={elem.title} key={elem.id} id={elem.id} setTasks={setTasks} tasks={tasks} setInfo={setInfo} info={info} />
    ));

    const getAllTask = async () => {
        const response = await getData();
        
        setTasks(response.data) 
    }

    const getComplitedTask = async () => {
        const response = await getDataCompleted();
        
        setTasks(response.data)   
    }

    const getInWorkTask = async () => {
        const response = await getDataInWork();

        setTasks(response.data)
        
    }
    
    const addTask = async(event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
           await createTask(event.currentTarget.value)
            
            const result = await getData();

            if(value) {
                setTasks(result.data)
                setInfo(result.info)
                setValue('')
            }
        } 
    }

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
                <Input onChange={(e) => setValue(e.currentTarget.value)} onKeyDown={addTask}  maxW="500px" placeholder="Введите вашу задачу" value={value} />
                <Flex maxW="500px" w="100%" justify="space-between">
                    <Button onClick={() => getAllTask()}>
                        <CounterTask counter={info ? info.all : 0} />
                        Все задачи
                    </Button>
                    <Button onClick={() => getComplitedTask()}>
                        <CounterTask counter={info ? info.completed : 0} />
                        Выполненые
                    </Button>
                    <Button onClick={() => getInWorkTask()}>
                        <CounterTask counter={info ? info.inWork : 0} />
                        В процессе
                    </Button>
                </Flex>
                {taskElements}
            </Flex>
        </Box>
    )
}