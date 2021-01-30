import { Flex, FlexProps, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<FlexProps> {
  title: string;
  description: string;
  linkTo?: string;
}

export const MainCard: React.FC<CardProps> = ({
  children,
  title,
  description,
  linkTo,
}) => {
  const router = useRouter();

  return (
    <>
      <Flex
        onClick={linkTo ? () => router.push(linkTo) : () => {}}
        w="full"
        flexDir="column"
        cursor="pointer"
        alignItems="center"
        my={2}
        borderWidth={2}
        borderRadius="sm"
        borderColor="black.400"
      >
        <Flex
          width="full"
          alignItems="center"
          justifyContent="space-between"
          flexDir={['column', null, 'row']}
        >
          <Heading
            textAlign="start"
            size="md"
            width="full"
            paddingX={6}
            paddingY={4}
          >
            {title}
          </Heading>

          <Flex
            w="full"
            alignItems="center"
            justifyContent={['flex-start', null, 'flex-end']}
          >
            {children}
          </Flex>
        </Flex>

        <Text
          paddingBottom={4}
          paddingX={6}
          fontSize="15px"
          textAlign="start"
          width="full"
          color="black.600"
        >
          {description}
        </Text>
      </Flex>
    </>
  );
};
