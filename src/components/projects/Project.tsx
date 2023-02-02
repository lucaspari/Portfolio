import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { ProjectCard } from './ProjectCard'
import movie from "../../assets/movieApp.png";
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
export const Project = () => {
  const { t } = useTranslation();
  return (
    <Box p={"2em"}>
        <Text className='mb-2' fontSize={"3xl"}>
        Projects
        </Text>
        <Box className='grid grid-cols-2'>
          <ProjectCard title='Movietify' img={movie} content={
            t("Simple project where an user types a name of a movie and gets the answer from an api called movieDatabase")
          }/>
        </Box>
    </Box>
  )
}
