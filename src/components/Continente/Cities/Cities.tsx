import { IContinentes } from 'continentes.mock';
import { Stack, Wrap, Text } from '@chakra-ui/react';
import { CitieCard } from './components';

export const Cities = ({
  continente,
}: {
  continente: IContinentes;
}): JSX.Element => {
  return (
    <Stack
      direction="column"
      spacing="5"
      px="4"
      w="100%"
      maxW={{ xl: '1160px', md: '820px' }}
      justify="flex-start"
      align="flex-start"
    >
      <Text fontSize={['2xl', '4xl']} fontWeight="medium  ">
        Cidades +100
      </Text>
      <Wrap spacing="40px" justify={['center', 'flex-start']}>
        {continente.cities?.map(citie => (
          <CitieCard
            citie={citie}
            key={`${continente.name}-citie-${citie.name}`}
          />
        ))}
      </Wrap>
    </Stack>
  );
};
