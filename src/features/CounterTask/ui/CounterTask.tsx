import { Flex } from "@chakra-ui/react"

interface CounterProps {
    counter: number
}

export const CounterTask = ({counter}: CounterProps) => {

    const minCounter = 0;
    const maxCounter = 99;


    return (
        <>
        { counter > minCounter && <Flex 
                                    fontSize="10px" 
                                    w="22px" 
                                    h="22px" 
                                    justify="center"
                                    alignItems="center"
                                    position="absolute" 
                                    bg="blue.400" 
                                    borderRadius="50%" 
                                    top="-5px" 
                                    right="-5px">{counter > maxCounter ? '99+' : counter}</Flex> }
        </>
        
    )
}