import {
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';

const types = [
  { label: 'vida noturna', image: 'cocktail' },
  { label: 'praia', image: 'surf' },
  { label: 'moderno', image: 'building' },
  { label: 'clássico', image: 'museum' },
  { label: 'e mais...', image: 'earth' },
];

export const TravelTypes = (): JSX.Element => {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <SimpleGrid flex="1" w="100%" columns={isDesktopVersion ? 5 : 2}>
      {types.map(type => {
        return (
          <Stack
            align="center"
            spacing={['2', '6']}
            direction={!isDesktopVersion ? 'row' : 'column'}
            justifyContent="center"
            key={type.label}
          >
            {isDesktopVersion ? (
              <Image
                boxSize={['60px', '70px', '85px']}
                src={`/images/${type.image}.svg`}
              />
            ) : (
              <Icon as={BsDot} fontSize="4xl" color="yellow.500" />
            )}
            <Text fontWeight="semibold" fontSize={['md', 'lg', '2xl']}>
              {type.label}
            </Text>
          </Stack>
        );
      })}
    </SimpleGrid>
  );
};
