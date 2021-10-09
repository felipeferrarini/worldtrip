import { Flex, Stack, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y]);

const continentes = [
  {
    name: 'Ásia',
    info: 'O continente mais antigo',
    image: 'continentes/asia.jpg',
  },
  {
    name: 'América do Norte',
    info: 'Lar da maior potência do mundo',
    image: 'continentes/america_norte.jpg',
  },
  {
    name: 'América do Sul',
    info: 'O continente mais antigo',
    image: 'continentes/america_sul.jpg',
  },
  {
    name: 'África',
    info: 'Safáris e belas paisagens',
    image: 'continentes/africa.jpg',
  },
  {
    name: 'Europa',
    info: 'O continente mais antigo',
    image: 'continentes/europa.jpg',
  },
  {
    name: 'Oceania',
    info: 'Exuberante natureza e diversidade cultural',
    image: 'continentes/oceania.jpg',
  },
];

const SliderShow = (): JSX.Element => {
  return (
    <Flex w="100%">
      <Swiper
        style={{ width: '100%' }}
        slidesPerView={1}
        navigation
        color="#FFBA08"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {continentes.map(cont => (
          <SwiperSlide key={`continente-${cont.name}`}>
            <Flex
              h={[250, 350, 450]}
              align="center"
              justify="center"
              backgroundImage={`url(${cont.image})`}
              backgroundPosition="center"
              backgroundSize="cover"
            >
              <Stack spacing={2} align="center">
                <Text
                  textShadow="2px 0px 5px #000"
                  fontWeight="bold"
                  fontSize={['3xl', '4xl', '5xl']}
                  color="gray.50"
                >
                  {cont.name}
                </Text>
                <Text
                  textShadow="2px 1px 3px #000"
                  fontSize={['sm', 'md', '2xl']}
                  color="gray.50"
                >
                  {cont.info}
                </Text>
              </Stack>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export { SliderShow };
