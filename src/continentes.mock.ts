export interface ICitie {
  name: string;
  country: string;
  image: string;
  icon: string;
}

export interface IContinentes {
  name: string;
  info: string;
  image: string;
  link: string;
  country_count: number;
  lang_count: number;
  cities_count: number;
  description: string;
  cities: ICitie[];
}

export const continentes = [
  {
    name: 'Ásia',
    info: 'O continente mais antigo',
    image: 'continentes/asia.jpg',
    link: '/asia',
    country_count: 51,
    lang_count: 51,
    cities_count: 27,
    description:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    cities: [
      {
        name: 'Londres',
        country: 'Reino Unido',
        image: 'continentes/europa/londres.jpg',
        icon: 'continentes/europa/londres.png',
      },
      {
        name: 'Paris',
        country: 'França',
        image: 'continentes/europa/paris.jpg',
        icon: 'continentes/europa/paris.png',
      },
      {
        name: 'Roma',
        country: 'Itália',
        image: 'continentes/europa/roma.jpg',
        icon: 'continentes/europa/roma.png',
      },
      {
        name: 'Praga',
        country: 'República Tcheca',
        image: 'continentes/europa/praga.jpg',
        icon: 'continentes/europa/praga.png',
      },
      {
        name: 'Amsterdã',
        country: 'Holanda',
        image: 'continentes/europa/amsterda.jpg',
        icon: 'continentes/europa/amsterda.png',
      },
    ],
  },
  {
    name: 'América do Norte',
    info: 'Lar da maior potência do mundo',
    image: 'continentes/america_norte.jpg',
    link: '/america_norte',
    country_count: 3,
    lang_count: 256,
    cities_count: 27,
    description:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    cities: [
      {
        name: 'Londres',
        country: 'Reino Unido',
        image: 'continentes/europa/londres.jpg',
        icon: 'continentes/europa/londres.png',
      },
      {
        name: 'Paris',
        country: 'França',
        image: 'continentes/europa/paris.jpg',
        icon: 'continentes/europa/paris.png',
      },
      {
        name: 'Roma',
        country: 'Itália',
        image: 'continentes/europa/roma.jpg',
        icon: 'continentes/europa/roma.png',
      },
      {
        name: 'Praga',
        country: 'República Tcheca',
        image: 'continentes/europa/praga.jpg',
        icon: 'continentes/europa/praga.png',
      },
      {
        name: 'Amsterdã',
        country: 'Holanda',
        image: 'continentes/europa/amsterda.jpg',
        icon: 'continentes/europa/amsterda.png',
      },
    ],
  },
  {
    name: 'América do Sul',
    info: 'O continente mais antigo',
    image: 'continentes/america_sul.jpg',
    link: '/america_sul',
    country_count: 12,
    lang_count: 456,
    cities_count: 27,
    description:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    cities: [
      {
        name: 'Londres',
        country: 'Reino Unido',
        image: 'continentes/europa/londres.jpg',
        icon: 'continentes/europa/londres.png',
      },
      {
        name: 'Paris',
        country: 'França',
        image: 'continentes/europa/paris.jpg',
        icon: 'continentes/europa/paris.png',
      },
      {
        name: 'Roma',
        country: 'Itália',
        image: 'continentes/europa/roma.jpg',
        icon: 'continentes/europa/roma.png',
      },
      {
        name: 'Praga',
        country: 'República Tcheca',
        image: 'continentes/europa/praga.jpg',
        icon: 'continentes/europa/praga.png',
      },
      {
        name: 'Amsterdã',
        country: 'Holanda',
        image: 'continentes/europa/amsterda.jpg',
        icon: 'continentes/europa/amsterda.png',
      },
    ],
  },
  {
    name: 'África',
    info: 'Safáris e belas paisagens',
    image: 'continentes/africa.jpg',
    link: '/africa',
    country_count: 54,
    lang_count: 200,
    cities_count: 27,
    description:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    cities: [
      {
        name: 'Londres',
        country: 'Reino Unido',
        image: 'continentes/europa/londres.jpg',
        icon: 'continentes/europa/londres.png',
      },
      {
        name: 'Paris',
        country: 'França',
        image: 'continentes/europa/paris.jpg',
        icon: 'continentes/europa/paris.png',
      },
      {
        name: 'Roma',
        country: 'Itália',
        image: 'continentes/europa/roma.jpg',
        icon: 'continentes/europa/roma.png',
      },
      {
        name: 'Praga',
        country: 'República Tcheca',
        image: 'continentes/europa/praga.jpg',
        icon: 'continentes/europa/praga.png',
      },
      {
        name: 'Amsterdã',
        country: 'Holanda',
        image: 'continentes/europa/amsterda.jpg',
        icon: 'continentes/europa/amsterda.png',
      },
    ],
  },
  {
    name: 'Europa',
    info: 'O continente mais antigo',
    image: 'continentes/europa.jpg',
    link: '/europa',
    country_count: 50,
    lang_count: 60,
    cities_count: 227,
    description:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    cities: [
      {
        name: 'Londres',
        country: 'Reino Unido',
        image: 'continentes/europa/londres.jpg',
        icon: 'continentes/europa/londres.png',
      },
      {
        name: 'Paris',
        country: 'França',
        image: 'continentes/europa/paris.jpg',
        icon: 'continentes/europa/paris.png',
      },
      {
        name: 'Roma',
        country: 'Itália',
        image: 'continentes/europa/roma.jpg',
        icon: 'continentes/europa/roma.png',
      },
      {
        name: 'Praga',
        country: 'República Tcheca',
        image: 'continentes/europa/praga.jpg',
        icon: 'continentes/europa/praga.png',
      },
      {
        name: 'Amsterdã',
        country: 'Holanda',
        image: 'continentes/europa/amsterda.jpg',
        icon: 'continentes/europa/amsterda.png',
      },
    ],
  },
  {
    name: 'Oceania',
    info: 'Exuberante natureza e diversidade cultural',
    image: 'continentes/oceania.jpg',
    link: '/oceania',
    country_count: 14,
    lang_count: 38,
    cities_count: 27,
    description:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    cities: [
      {
        name: 'Londres',
        country: 'Reino Unido',
        image: 'continentes/europa/londres.jpg',
        icon: 'continentes/europa/londres.png',
      },
      {
        name: 'Paris',
        country: 'França',
        image: 'continentes/europa/paris.jpg',
        icon: 'continentes/europa/paris.png',
      },
      {
        name: 'Roma',
        country: 'Itália',
        image: 'continentes/europa/roma.jpg',
        icon: 'continentes/europa/roma.png',
      },
      {
        name: 'Praga',
        country: 'República Tcheca',
        image: 'continentes/europa/praga.jpg',
        icon: 'continentes/europa/praga.png',
      },
      {
        name: 'Amsterdã',
        country: 'Holanda',
        image: 'continentes/europa/amsterda.jpg',
        icon: 'continentes/europa/amsterda.png',
      },
    ],
  },
];
