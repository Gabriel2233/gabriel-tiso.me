import { Flex, Heading, Text } from '@chakra-ui/react';
import { PageWithProject } from '../types/types';
import Badge from './Badge';

const ProjectElement: React.FC<PageWithProject> = ({ projectData }) => {
  return (
    <Flex
      w="full"
      flexDir="column"
      cursor="pointer"
      borderWidth={2}
      borderRadius="sm"
      borderColor="black.400"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDir={['column', null, 'row']}
      >
        <Heading textAlign="start" size="md" width="full">
          {projectData.name}
        </Heading>
        <Flex
          alignItems="center"
          justifyContent={['flex-start', null, 'flex-end']}
          flexDir="row"
          w="full"
        >
          {projectData.badges.map((badge) => (
            <Badge data={badge} key={badge} />
          ))}
        </Flex>
      </Flex>

      <Text
        paddingBottom={4}
        textAlign="start"
        width="full"
        color="black.600"
        fontSize="14px"
      >
        {projectData.description}
      </Text>
    </Flex>
  );
};

export default ProjectElement;
