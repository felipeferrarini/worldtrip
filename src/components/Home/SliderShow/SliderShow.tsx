import { Flex, Stack, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import NextLink from 'next/link';
import { continentes } from '../../../continentes.mock';

SwiperCore.use([Navigation, Pagination, A11y]);

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
                <NextLink href={cont.link}>
                  <a>
                    <Text
                      textShadow="2px 0px 5px #000"
                      fontWeight="bold"
                      fontSize={['3xl', '4xl', '5xl']}
                      color="gray.50"
                    >
                      {cont.name}
                    </Text>
                  </a>
                </NextLink>
                <Text
                  textShadow="2px 0px 5px rgba(0,0,0,0.5)"
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
