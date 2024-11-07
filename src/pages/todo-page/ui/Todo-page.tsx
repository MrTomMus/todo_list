import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { TodoList } from "src/features/Todo-list"
import { getData } from "src/shared/api/tasks/api";

export const TodoPage = () => {

    const [tasks, setTasks] = useState([]);
    const [info,  setInfo] = useState();

    useEffect(() => {
        const handleGetTask = async () => {
            const response = await getData();
            setTasks(response.data);
            setInfo(response.info)
        }

        handleGetTask()
    },[]);

    // TODO Тут обертка для Loader
    return (
        <Box> 
            <TodoList tasks={tasks} setTasks={setTasks} info={info} setInfo={setInfo} />
        </Box>
            
    )
}
