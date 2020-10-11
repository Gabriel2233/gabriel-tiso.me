import { Button, Flex } from "@chakra-ui/core";
import Link from "next/link";

const Header: React.FC = ({ children }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      paddingY={8}
      w="full"
    >
      {children}

      <Flex>
        <Link href="/">
          <Button borderRadius="sm" marginX={2} background="transparent">
            Home
          </Button>
        </Link>
        <Link href="/blog">
          <Button borderRadius="sm" marginX={2} background="transparent">
            Blog
          </Button>
        </Link>
        <Link href="/about">
          <Button borderRadius="sm" marginX={2} background="transparent">
            About
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
