import React from 'react'
import { Text, Box } from '@chakra-ui/layout'
import { name } from '../data/name'
const randomName = name[Math.floor(Math.random()*name.length)]
export default function Greeting (){
    return (
        <Box d='flex' justifyContent='center' mb='10px'>
            <Text fontSize='20px'> Olá, {randomName} </Text>
        </Box>
    )
}