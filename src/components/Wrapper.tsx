import { Flex } from '@chakra-ui/react';

export const Wrapper: React.FC = ({ children }) => {
  return (
    <Flex
      w={['100%', null, '50%']}
      height="100%"
      align="start"
      justify="center"
      flexDir="column"
      px={6}
      py={4}
      bg="red.200"
    >
      {children}
    </Flex>
  );
};
