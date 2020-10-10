import { Flex, Heading, Text } from "@chakra-ui/core";
import { formatDistance, parseISO } from "date-fns";

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
    <Flex
      flexDir="column"
      cursor="pointer"
      alignItems="center"
      m={6}
      borderWidth={2}
      borderRadius="sm"
      borderColor="black.400"
    >
      <Flex width="full" alignItems="center" justifyContent="space-between">
        <Heading
          textAlign="start"
          size="lg"
          width="full"
          paddingX={6}
          paddingY={4}
        >
          {postData.title}
        </Heading>

        <Text fontSize="small" color="black.900" width="100px" paddingRight={8}>
          {postDateFromNow} ago
        </Text>
      </Flex>

      <Text
        paddingBottom={4}
        paddingX={6}
        textAlign="start"
        width="full"
        color="black.600"
      >
        {postData.description}
      </Text>
    </Flex>
  );
};

export default PostElement;
