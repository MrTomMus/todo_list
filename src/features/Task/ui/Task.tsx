import { Box, Flex, useColorMode, Input } from "@chakra-ui/react"
import { ReactComponent as Edit } from "src/shared/assets/icons/edit.svg"
import {ReactComponent as Basket } from "src/shared/assets/icons/basket.svg"
import { IconButton } from "src/shared/components/IconButton"
import { deleteTask, getData } from "src/shared/api/tasks/api"
import { Info, TaskObj } from "src/shared/api/tasks/types"
import { useEffect, useRef, useState } from "react"


interface TaskProps {
    title: string,
    id: string,
    setTasks: (tasks: []) => void,
    tasks: TaskObj[],
    setInfo: (info: Info) => void,
    
}

export const Task = ({ title, id, setTasks, tasks, setInfo}: TaskProps) => {

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

    const handleOnBlur = (e) => {
        console.log(e.currentTarget.value)
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
            {isInputEdit ? <Input 
                                ref={inputRef} 
                                onChange={(e) => setValueInputEdit(e.currentTarget.value)} 
                                value={valueInputEdit}
                                onBlur={(e) => handleOnBlur(e)}></Input> : title}
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