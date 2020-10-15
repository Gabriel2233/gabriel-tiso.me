import { Button, Icon } from "@chakra-ui/core";
import { useRouter } from "next/router";

export const BackButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} px={[10, null, 4]}>
      <Icon name="arrow-back" mr={2} />
      Back
    </Button>
  );
};
