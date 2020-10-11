import { Flex, Text, useColorMode } from "@chakra-ui/core";
import { BadgeProps } from "../types/types";

const Badge: React.FC<BadgeProps> = ({ data }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      fontSize="small"
      marginX={2}
      backgroundColor={colorMode === "dark" ? "gray.700" : "gray.200"}
      paddingX={2}
      paddingY={1}
      borderRadius="sm"
    >
      <Text color={colorMode === "light" ? "blue.500" : "gray.500"}>
        {data}
      </Text>
    </Flex>
  );
};

export default Badge;
