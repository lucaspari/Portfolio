import "./index.css";
import {
  HStack,
  Image,
  useColorMode,
  Text,
  Flex,
  Box,
  Stack,
} from "@chakra-ui/react";

import Me from "../../assets/me.jpg";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import brazil from "../../assets/brazil.png";
import eua from "../../assets/eua.png";
export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="header">
      <Flex justifyContent={"space-between"}>
        <HStack>
          <Image borderRadius="full" boxSize="3em" src={Me} alt="Dan Abramov" />
          <Text fontSize={"2xl"} color="green.400">
            lucaspari.dev
          </Text>
        </HStack>
        <HStack>
          <Box
            className="boxButton"
            data-testid="boxButton"
            onClick={toggleColorMode}
            alignSelf={"center"}
          >
            {colorMode === "light" ? (
              <MoonIcon boxSize={7} data-testid="moon" />
            ) : (
              <SunIcon boxSize={7} data-testid="sun" />
            )}
          </Box>
          <Box className="flex">
            <img
              onClick={() => {
                changeLanguage("pt");
              }}
              className="cursor-pointer"
              src={brazil}
              alt="brazil_flag"
            />
            <img
              onClick={() => {
                changeLanguage("en");
              }}
              src={eua}
              className="cursor-pointer"
              alt="eua_flag"
            />
          </Box>
        </HStack>
      </Flex>
    </div>
  );
};
