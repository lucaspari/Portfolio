import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
interface CardProj {
  name: string;
  description: string;
  image: string;
  github: string;
}
export const CardProject: React.FC<CardProj> = ({
  name,
  description,
  image,
  github,
}) => {
  return (
    <Box mt="3">
      <Card>
        <CardBody>
          <Image
            boxSize="100%"
            objectFit={"revert"}
            src={image}
            alt={image}
            height={"200px"}
            borderRadius={"lg"}
          ></Image>
          <Stack mt="6" spacing="3">
            <Box display={"flex"} gap={2}>
              <Heading size={"md"}>{name}</Heading>
              <Link href={github} isExternal>
                {" "}
                <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>

            <Text>{description}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};
