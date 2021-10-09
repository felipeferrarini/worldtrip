import { useRouter } from 'next/router';
import { Stack } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { Background, Info, Cities } from 'components/Continente';
import { continentes } from 'continentes.mock';

const Continente = (): JSX.Element => {
  const { query, push } = useRouter();

  if (!query.continente) {
    push('/');
  }

  const selectedContinent = continentes.find(continente =>
    continente.link.includes(query.continente as string)
  );

  if (!selectedContinent) {
    push('/');
  }

  return (
    <Stack direction="column" spacing={['6', '20']} align="center">
      <Background continente={selectedContinent} />
      <Info continente={selectedContinent} />
      <Cities continente={selectedContinent} />
    </Stack>
  );
};

export default Continente;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
