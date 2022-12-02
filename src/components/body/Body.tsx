import React from "react";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import "./index.css";
export const Body = () => {
  return (
    <Box p={"2em"}>
      <Text mb={8} fontSize={"xl"}>
        I've started my journey as a software developer when I entered in
        college and fell in love with programming and solving problems. I Had
        the opportunity of solving major problems on logistics system that were
        very challenging at the time with Java, NodeJS among others. Since then
        I try to get better myself every day.
      </Text>
      <Box>
        <Stack>
          <Text fontSize={"3xl"} as={"b"}>
            Tech Skills
          </Text>
          <Text fontSize={"xl"}>
            Here are some of the technologies and tools I'm proficient and
            comfortable with:
          </Text>
        </Stack>
        <HStack mt={2}>
          <Stack className="javascript">
            <div className="icons8-javascript"></div>
            <Text className="javascript">Javascript</Text>
          </Stack>
          <Stack className="typescript">
            <div className="icons8-typescript typescript"></div>
            <Text>Typescript</Text>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};
