import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { CardProject } from "../card/CardProject";
import Sofa from "../../assets/proj/sofa.png";
import MusicPlayer from "../../assets/proj/music-player.png";
export const Projects = () => {
  const { t } = useTranslation();
  return (
    <Box p={"2em"}>
      <Text fontSize={"3xl"}>Projects</Text>
      <SimpleGrid columns={2} gap={4}>
        <CardProject
          name="Sofa Card"
          image={Sofa}
          github="https://github.com/lucaspari/Bora-Codar-02"
          description="This project presents a simple sofa Card, that was built with CSS, HTML and Javascript"
        ></CardProject>
        <CardProject
          name="Music Player"
          github="https://github.com/lucaspari/Bora-Codar-01"
          image={MusicPlayer}
          description="This project presents 3 versions of a music player card built with CSS and HTML"
        ></CardProject>
      </SimpleGrid>
    </Box>
  );
};
