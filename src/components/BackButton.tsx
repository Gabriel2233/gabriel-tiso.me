import { Button, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BiChevronLeft } from 'react-icons/bi';

export const BackButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} px={[6, null, 2]}>
      <Icon mr={1} fontSize="22px">
        <BiChevronLeft />
      </Icon>
      Back
    </Button>
  );
};
