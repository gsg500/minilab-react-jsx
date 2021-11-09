import React from 'react'
import { Box } from '@chakra-ui/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faSmile, faFrownOpen} from '@fortawesome/free-solid-svg-icons'

export default function EmotionMeter(){
    let emotion = ['HAPPY', "SAD"]
    let indexRandom = Math.floor(Math.random()*emotion.length)    
    return (
        <Box d='flex' justifyContent='center' mt='10px'> 
                {emotion[indexRandom] === 'HAPPY' ? <FontAwesomeIcon icon={faSmile} size='6x'/> : <FontAwesomeIcon icon={faFrownOpen} size='6x' />}
        </Box>
)}