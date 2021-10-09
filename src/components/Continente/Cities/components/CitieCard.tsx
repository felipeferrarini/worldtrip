import { Stack, WrapItem, Text, Flex, Image, Box } from '@chakra-ui/react';
import { ICitie } from 'continentes.mock';

export const CitieCard = ({ citie }: { citie: ICitie }): JSX.Element => {
  return (
    <WrapItem>
      <Flex
        bgColor="white"
        direction="column"
        borderRadius="5px"
        border="1px solid"
        borderColor="yellow.300"
        w="256px"
        h="279px"
      >
        <Box
          backgroundImage={`url(${citie.image})`}
          backgroundPosition="center"
          backgroundSize="cover"
          w="100%"
          h="173px"
          borderRadius="5px 5px 0 0"
        />
        <Flex direction="row" justify="space-between" p="6" align="center">
          <Stack spacing="3" direction="column">
            <Text fontSize="xl" fontWeight="semibold">
              {citie.name}
            </Text>
            <Text color="gray.400">{citie.country}</Text>
          </Stack>
          <Image src={citie.icon} />
        </Flex>
      </Flex>
    </WrapItem>
  );
};
