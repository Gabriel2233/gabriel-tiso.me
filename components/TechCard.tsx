import { Flex, Image, Text, useColorMode } from "@chakra-ui/core";
import { Tech } from "../types/types";

type Props = {
  techData: Tech;
};

export const TechCard: React.FC<Props> = ({ techData }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      m={6}
      p={6}
      border={0}
      borderRadius="sm"
      backgroundColor={colorMode === "light" ? "gray.200" : "gray.900"}
    >
      <Image src={techData.path} w="100%" />

      <Text fontSize="md" pt={5}>
        {techData.name}
      </Text>
    </Flex>
  );
};
