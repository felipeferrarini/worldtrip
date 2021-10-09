import { Center, Text } from '@chakra-ui/react';
import { IContinentes } from '../../../continentes.mock';

export const Background = ({
  continente,
}: {
  continente: IContinentes;
}): JSX.Element => {
  return (
    <Center
      backgroundImage={`url(${continente.image})`}
      backgroundPosition="center"
      backgroundSize="cover"
      w="100%"
      h={['150px', '500px']}
    >
      <Text
        color="white"
        fontSize={['3xl', '5xl']}
        fontWeight="semibold"
        textShadow="2px 0px 5px rgba(0,0,0,0.5)"
      >
        {continente.name}
      </Text>
    </Center>
  );
};
