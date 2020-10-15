import { Flex, Icon, Link, Text, useColorMode } from "@chakra-ui/core";

import { FiGithub } from "react-icons/fi";

export const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex w="full" my={6} alignItems="center" justifyContent="center">
      <Text
        fontSize="md"
        color={colorMode === "light" ? "gray.600" : "gray.400"}
      >
        Made with 💙 by{" "}
        <Link href="https://github.com/Gabriel2233" target={"_blank"}>
          Gabriel Tiso <Icon as={FiGithub} />
        </Link>
      </Text>
    </Flex>
  );
};
