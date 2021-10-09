import { Flex, Image, Stack, Text } from '@chakra-ui/react';

export const Banner = (): JSX.Element => {
  return (
    <Flex
      backgroundImage="url(Background.png)"
      backgroundPosition="top"
      backgroundSize="cover"
      w="100%"
      py={['7', '14', '20']}
    >
      <Flex
        w="100%"
        maxW={1240}
        mx="auto"
        px={['4', '6', '10']}
        position="relative"
      >
        <Stack spacing="5" maxW={['100%', '80%', '50%']}>
          <Text
            fontWeight="medium"
            color="gray.50"
            fontSize={['xl', '2xl', '4xl']}
          >
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text color="gray.100" fontSize={['sm', 'md', 'xl']}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
        <Image
          src="Airplane.svg"
          position="absolute"
          h="270px"
          display={['none', 'none', 'initial']}
          insetEnd="10"
          insetY="6"
        />
      </Flex>
    </Flex>
  );
};
