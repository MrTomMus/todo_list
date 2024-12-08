import { Box, Flex, useColorMode, Input, Checkbox } from "@chakra-ui/react"
import { ReactComponent as Edit } from "src/shared/assets/icons/edit.svg"
import {ReactComponent as Basket } from "src/shared/assets/icons/basket.svg"
import { IconButton } from "src/shared/components/IconButton"
import { deleteTask, editTaskTitle, getData } from "src/shared/api/tasks/api"
import { Info, TaskObj } from "src/shared/api/tasks/types"
import { useEffect, useRef, useState } from "react"


interface TaskProps {
    title: string,
    id: string,
    setTasks: (tasks: []) => void,
    tasks: TaskObj[],
    setInfo: (info: Info) => void,
    isDone: boolean,
}

export const Task = ({ title, id, setTasks, tasks, setInfo, isDone}: TaskProps) => {

    const [isInputEdit, setInputEdit] = useState(false);
    const [valueInputEdit, setValueInputEdit] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);

    const { colorMode } = useColorMode();

    const strokeColor = colorMode === "dark" ? "white" : "black";

    const handleEdit = () => { // TODO Сделать возможность редактирования таски по клику на лого
        setInputEdit(!isInputEdit)
        setValueInputEdit(title)
    }

    useEffect(() => {
        if (isInputEdit && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isInputEdit]);

    const handleDelete = async (id:string) => {
        await deleteTask(id);

        const response = await getData();

        setTasks(tasks.filter(elem => elem.id !== id))
        setInfo(response.info)
    }

    const handleOnBlur = async (id: string, newTitle: string) => {
        setInputEdit(false)
        await editTaskTitle(id, newTitle)
        setTasks(tasks.map(task => task.id === id ? {...task, title: newTitle} : task)) // Вопрос, в чем разница сэтать в стейт или запрашивать с сервака данные, ведь там они поменялись
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
            <Checkbox isChecked={isDone}/>
            <Box maxW="600px" w="100%" wordBreak="normal">
                
            {isInputEdit ? <Input 
                                ref={inputRef} 
                                onChange={(e) => setValueInputEdit(e.currentTarget.value)} 
                                value={valueInputEdit}
                                onBlur={(e) => handleOnBlur(id, e.currentTarget.value)}></Input> : title}
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