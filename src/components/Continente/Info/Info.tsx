import { Stack, Text, Flex } from '@chakra-ui/react';
import { IContinentes } from 'continentes.mock';

export const Info = ({
  continente,
}: {
  continente: IContinentes;
}): JSX.Element => {
  return (
    <Stack
      direction={['column', 'column', 'row']}
      px="4"
      maxW={{ xl: '1160px', md: '820px' }}
      spacing={['4', '16']}
    >
      <Text fontSize={['sm', 'xl']} textAlign="justify">
        {continente.description}
      </Text>
      <Stack direction="row" spacing="6">
        <Flex direction="column" align={['flex-start', 'center']}>
          <Text color="yellow.500" fontSize="3xl" fontWeight="semibold">
            {continente.country_count}
          </Text>
          <Text fontSize="xl" fontWeight="semibold">
            países
          </Text>
        </Flex>
        <Flex direction="column" align={['flex-start', 'center']}>
          <Text color="yellow.500" fontSize="3xl" fontWeight="semibold">
            {continente.lang_count}
          </Text>
          <Text fontSize="xl" fontWeight="semibold">
            línguas
          </Text>
        </Flex>
        <Flex direction="column" align={['flex-start', 'center']}>
          <Text color="yellow.500" fontSize="3xl" fontWeight="semibold">
            {continente.cities_count}
          </Text>
          <Text fontSize="xl" fontWeight="semibold">
            cidades
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
};
