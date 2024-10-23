import { Box } from "@chakra-ui/react"

interface CounterProps {
    counter: number
}

export const CounterTask = ({counter}: CounterProps) => {
    return (
        <Box w="20px" h="20px" boxSizing="border-box" position="absolute" bg="blue.400" borderRadius="50%" top="-5px" right="-5px">{counter}</Box>
    )
}