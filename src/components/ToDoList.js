import React from 'react';
import { Stack, Box } from '@chakra-ui/layout';
import { CheckboxGroup, Checkbox } from '@chakra-ui/checkbox';
const tasks = [
    "Fazer compras",
    "Renovar CNH",
    "Pagar contas",
    "Estudar React",
    "Fazer Minilab",
  ];

export default function ToDoList() {
    return (
        <Box d="flex" justifyContent="center" mt="10px" border='1px'>
            <CheckboxGroup>
                <Stack d='flex' w="100vh" p="0 10px 10px 10px">
                    {tasks.map((element, index) => 
                    {
                        return ( <div> <hr /> <Checkbox w='100' value={tasks[index]} key={tasks[index]}> {element} </Checkbox> </div>)
                    })}
                </Stack>
            </CheckboxGroup>
        </Box> )}