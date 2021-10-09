import { Flex, Image } from '@chakra-ui/react';

export const Header = (): JSX.Element => {
  return (
    <Flex
      h={['50', '75', '100']}
      align="center"
      justify="center"
      boxShadow="sm"
    >
      <Image src="logo.svg" alt="worldtrip" h={['25', '30', '45']} />
    </Flex>
  );
};
