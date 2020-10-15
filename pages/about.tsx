import { Flex } from "@chakra-ui/core";
import { BackButton } from "../components/BackButton";
import Header from "../components/Header";

const About = () => {
  return (
    <Flex w="100vw" h="100vh" flexDir="column" alignItems="center">
      <Flex w={["100%", null, "70%"]} flexDir="column" alignItems="center">
        <Header>
          <BackButton />
        </Header>
      </Flex>
    </Flex>
  );
};

export default About;
