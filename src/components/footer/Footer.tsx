import { Box, HStack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStackOverflow,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export const Footer = () => {
  return (
    <Box p={"2em"}>
      <HStack spacing={8} className="flex justify-center">
        <a
          className="hover:text-[#00cc99]"
          href="https://stackoverflow.com/users/20586425/lucas-fernando"
        >
          <FontAwesomeIcon
            href=""
            size="2x"
            icon={faStackOverflow}
          ></FontAwesomeIcon>
        </a>
        <a
          className="hover:text-[#00cc99]"
          href="https://www.linkedin.com/in/lucas-fernando-pari/"
        >
          <FontAwesomeIcon size="2x" icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <a
          className="hover:text-[#00cc99]"
          href="https://github.com/dumbleedore"
        >
          <FontAwesomeIcon size="2x" icon={faGithub}></FontAwesomeIcon>
        </a>
      </HStack>
      <Box className="flex justify-center p-4">
        <Text>Lucas Pari © 2022</Text>
      </Box>
    </Box>
  );
};
