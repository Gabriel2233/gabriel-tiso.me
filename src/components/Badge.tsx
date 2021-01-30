import { Flex, Text, useColorMode } from '@chakra-ui/react';
import { BadgeProps } from '../types/types';

const Badge: React.FC<BadgeProps> = ({ data }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      mr={3}
      my={2}
      p={1}
      px={2}
      backgroundColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
      borderRadius="sm"
      fontSize="small"
    >
      <Text color={colorMode === 'light' ? 'blue.500' : 'gray.500'}>
        # {data}
      </Text>
    </Flex>
  );
};

export default Badge;
