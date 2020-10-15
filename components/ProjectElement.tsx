import { Flex, Heading, Text } from "@chakra-ui/core";
import { PageWithProject } from "../types/types";
import Badge from "./Badge";

const ProjectElement: React.FC<PageWithProject> = ({ projectData }) => {
  return (
    <Flex
      flexDir="column"
      cursor="pointer"
      alignItems="center"
      m={4}
      borderWidth={2}
      borderRadius="sm"
      borderColor="black.400"
    >
      <Flex
        width="full"
        alignItems="center"
        justifyContent="space-between"
        flexDir={["column", null, "row"]}
      >
        <Heading
          textAlign="start"
          size="lg"
          width="full"
          paddingX={6}
          paddingY={4}
        >
          {projectData.name}
        </Heading>
        <Flex
          alignItems="center"
          justifyContent={["flex-start", null, "flex-end"]}
          flexDir="row"
          w="full"
          px={4}
        >
          {projectData.badges.map((badge) => (
            <Badge data={badge} key={badge} />
          ))}
        </Flex>
      </Flex>

      <Text
        paddingBottom={4}
        paddingX={6}
        textAlign="start"
        width="full"
        color="black.600"
      >
        {projectData.description}
      </Text>
    </Flex>
  );
};

export default ProjectElement;
