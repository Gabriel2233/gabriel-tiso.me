import { Button, Flex, useColorMode } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';

const OpaqueNav = styled(Flex)`
  position: fixed;
  top: 0;
  backdrop-filter: saturate(120%) blur(30px);
  transition: background-color 0.1 ease-in-out;
`;

const Header: React.FC = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      paddingY={8}
      mb={4}
      w="100vw"
      background={colorMode === 'light' ? 'white' : 'gray.950'}
    >
      <OpaqueNav
        alignItems="center"
        justifyContent="space-between"
        paddingY={6}
        paddingX={6}
        w={['100%', null, '80%']}
        background={colorMode === 'light' ? 'white' : 'gray.950'}
      >
        {children}

        <Flex>
          <Link href="/">
            <Button borderRadius="sm" background="transparent">
              Home
            </Button>
          </Link>
          <Link href="/blog">
            <Button borderRadius="sm" background="transparent">
              Blog
            </Button>
          </Link>
          <Link href="/about">
            <Button borderRadius="sm" background="transparent" mr={2}>
              About
            </Button>
          </Link>
        </Flex>
      </OpaqueNav>
    </Flex>
  );
};

export default Header;
