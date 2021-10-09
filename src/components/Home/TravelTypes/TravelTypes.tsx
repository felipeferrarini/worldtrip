import {
  Icon,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';

const types = [
  { label: 'vida noturna', image: 'cocktail' },
  { label: 'praia', image: 'surf' },
  { label: 'moderno', image: 'building' },
  { label: 'clássico', image: 'museum' },
  { label: 'e mais...', image: 'earth', last: true },
];

export const TravelTypes = (): JSX.Element => {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Wrap flex="1" w={['275px', '100%']} spacing="2" justify="space-between">
      {types.map(type => (
        <WrapItem key={type.label} w={type.last && ['100%', 'initial']}>
          <Stack
            direction={['row', 'column']}
            justify="center"
            align="center"
            w={['100%', 'initial']}
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
        </WrapItem>
      ))}
    </Wrap>
  );
};
