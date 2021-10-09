import { Flex, Image, IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaAngleLeft } from 'react-icons/fa';
import NextLink from 'next/link';

export const Header = (): JSX.Element => {
  const router = useRouter();

  return (
    <Flex h={['50', '75', '100']} align="center" boxShadow="sm" px="5">
      {router.pathname !== '/' && (
        <NextLink href="/">
          <a>
            <IconButton
              icon={<FaAngleLeft />}
              aria-label="Back to home"
              fontSize="2xl"
            />
          </a>
        </NextLink>
      )}
      <Image
        src="logo.svg"
        alt="worldtrip"
        h={['25', '30', '45']}
        mr="auto"
        ml="auto"
      />
    </Flex>
  );
};
