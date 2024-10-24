import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { TodoList } from "src/features/Todo-list"

export const TodoPage = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const url = 'https://easydev.club/api/v1/todos?filter=all'; // TODO Вынести запрос в API

        async function getData() {
            const response = await fetch(url);
            const data = await response.json();

            setTasks(data.data)
        }
        getData()
    },[]);


    // TODO Тут обертка для Loader
    return (
        <Box> 
            <TodoList tasks={tasks}/>
        </Box>
            
    )
}
