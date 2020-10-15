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
          {postData.title}
        </Heading>

        <Flex
          w="full"
          alignItems="center"
          justifyContent={["flex-start", null, "flex-end"]}
        >
          <Text
            fontSize="small"
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
