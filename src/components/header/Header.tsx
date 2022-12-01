import "./index.css";
import { HStack, Image, useColorMode, Text, Flex, Box } from "@chakra-ui/react";
import Me from "../../assets/me.jpg";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="header">
      <Flex justifyContent={"space-between"}>
        <HStack>
          <Image borderRadius="full" boxSize="3em" src={Me} alt="Dan Abramov" />
          <Text fontSize={"2xl"} color="green.400">
            lucaspari.dev
          </Text>
        </HStack>
        <Box
          className="boxButton"
          data-testid="boxButton"
          onClick={toggleColorMode}
          alignSelf={"center"}
        >
          {colorMode === "light" ? (
            <MoonIcon data-testid="moon" />
          ) : (
            <SunIcon data-testid="sun" />
          )}
        </Box>
      </Flex>
    </div>
  );
};
