import { Flex, Heading, Text } from '@chakra-ui/react';
import { formatDistance, parseISO } from 'date-fns';
import Link from 'next/link';

export type PostCardProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
  author: string;
};

type PageProps = {
  postData: PostCardProps;
};

const PostElement: React.FC<PageProps> = ({ postData }) => {
  const postDateFromNow = formatDistance(parseISO(postData.date), new Date());

  return (
    <Link href={`/blog/${postData.slug}`}>
      <Flex
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
            {postData.title}
          </Heading>

          <Flex
            w="full"
            alignItems="center"
            justifyContent={['flex-start', null, 'flex-end']}
          >
            <Text
              fontSize="15px"
              color="gray.600"
              pl={8}
              pr={4}
              py={[4, null, 0]}
            >
              {postDateFromNow} ago
            </Text>
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
          {postData.description}
        </Text>
      </Flex>
    </Link>
  );
};

export default PostElement;
