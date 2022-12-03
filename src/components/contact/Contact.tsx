import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const Contact = () => {
  return (
    <Box p={"2em"}>
      <Text fontSize={"3xl"}>Contact</Text>
      <Text className="text-lg">
        If you want to reach me out please drop me an{" "}
        <a
          href="mailto:lucaspariii@gmail.com"
          className="underline decoration-green-500"
        >
          email
        </a>
        . You can also check out my social media presence following the links
        below.
      </Text>
    </Box>
  );
};
