import React from "react";
import { Box, HStack, Stack, Text, Image, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Js from "../../assets/js.svg";
import Ts from "../../assets/ts.svg";
import reactIcon from "../../assets/react.svg";
import javaColored from "../../assets/javacolored.svg";
import nodeJs from "../../assets/nodeJs.svg";
import python from "../../assets/python.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import "./index.css";
import { useTranslation } from "react-i18next";
export const Body = () => {
  const { t } = useTranslation();
  return (
    <Box p={"2em"}>
      <Text mb={8} fontSize={"xl"}>
        {t(
          "I've started my journey as a software developer when I entered in college and fell in love with programming and solving problems. I Had the opportunity of solving major problems on logistics system that were very challenging at the time with Vue.js and MYSQL. Nowadays I'm trying to get better at React.js and Java, so my ultimate goal is to find a job vacancy that works with these technologies to improve myself."
        )}
      </Text>
      <Box>
        <Stack>
          <Text fontSize={"3xl"} as={"b"}>
            Tech Skills
          </Text>
          <Text fontSize={"xl"}>
            {t(
              "Here are some of the technologies and tools I'm proficient and comfortable with:"
            )}
          </Text>
        </Stack>
        <Flex justifyContent={"space-between"} mt={4}>
          <Stack>
            <img className="javascript" src={Js}></img>
            <Text className="text-center">Javascript</Text>
          </Stack>
          <Stack>
            <img className="typescript" src={Ts}></img>
            <Text className="text-center">Typescript</Text>
          </Stack>
          <Stack>
            <img className="react" src={reactIcon}></img>
            <Text className="text-center">React</Text>
          </Stack>
          <Stack>
            <img src={javaColored}></img>
            <Text className="text-center">Java</Text>
          </Stack>
        </Flex>
        <Flex justifyContent={"space-between"} mt={4}>
          <Stack>
            <img src={nodeJs}></img>
            <Text className="text-center">Node.js</Text>
          </Stack>
          <Stack>
            <img src={html}></img>
            <Text className="text-center">HTML</Text>
          </Stack>
          <Stack>
            <img src={css}></img>
            <Text className="text-center">CSS</Text>
          </Stack>
          <Stack>
            <img src={python}></img>
            <Text className="text-center">Python</Text>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};
