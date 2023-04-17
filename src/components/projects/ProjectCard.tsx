import { Box, Center, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import "./index.css"
interface movieCard{
  title:string,
  img:string,
  content:string,
}

export const ProjectCard = (props: movieCard) => {
  const { colorMode } = useColorMode();
  return (
    <Box className={ colorMode == "dark" ? " card bg-[#1c1b29] " : " card bg-[#f2f2f2]"}>
      <a href='https://lucaspari.github.io/movie-proj/'>
      <div className='card__header'>
        <Text fontSize={"md"} className="font-bold text-center p-2">{props.title}</Text>
      </div>
      <div className='card__content'>
        <img src={props.img} alt="movie" />
        <Text className='text-center p-4'  fontSize={"sm"}>{props.content}
        </Text>
      </div>
      </a>
    </Box>

    
  )
}
