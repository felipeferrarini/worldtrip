import { Divider, Flex, Stack, Text, VStack } from '@chakra-ui/react';
import { Banner } from './components/Home/Banner';
import { SliderShow } from './components/Home/SliderShow/SliderShow';
import { TravelTypes } from './components/Home/TravelTypes';

export default function Home(): JSX.Element {
  return (
    <Flex direction="column">
      <Banner />

      <Flex w="100%" my="6" maxW={1240} mx="auto" px={['4', '6', '10']} pt="12">
        <VStack w="100%" spacing={['6', '12', '16']}>
          <TravelTypes />
          <Divider borderWidth="2" borderColor="gray.600" w="20" />
          <Stack align="center">
            <Text fontSize={['xl', '2xl', '4xl']} fontWeight="medium">
              Vamos nessa?
            </Text>
            <Text fontSize={['xl', '2xl', '4xl']} fontWeight="medium">
              Então escolha seu continente
            </Text>
          </Stack>
          <SliderShow />
        </VStack>
      </Flex>
    </Flex>
  );
}
