import { Box } from "@chakra-ui/react"
import { TodoList } from "../../../features/Todo-list" // TODO Исправить путь на абсолютный
import basket from "../../../shared/assets/icons/basket.svg"
import save from "../../../shared/assets/icons/save.svg"
import { IconButton } from "../../../shared/components/IconButton"



export const TodoPage = () => {

    const hundleButton = ( ) => {
        console.log()
    }

    return (
        <Box>
            <TodoList />
            <IconButton imgSrc={basket} hundleButton={hundleButton} />
            <IconButton imgSrc={save} hundleButton={hundleButton} />
        </Box>
            
    )
}
