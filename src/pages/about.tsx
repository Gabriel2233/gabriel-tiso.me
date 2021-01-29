import { Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { BackButton } from '../components/BackButton';
import { ExternalLink } from '../components/ExternalLink';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import { Meta } from '../components/meta';
import { TechCard } from '../components/TechCard';
import { TechILove } from '../_data/technologies';

const url = 'https://gabriel-tiso-blog.vercel.app/about';
const title = 'Gabriel Tiso - About me';

const About = () => {
  return (
    <>
      <Meta />
      <NextSeo title={title} canonical={url} openGraph={{ title, url }} />
      <Flex w="100vw" h="100vh" flexDir="column" alignItems="center">
        <Flex w={'70%'} flexDir="column" alignItems="center">
          <Header>
            <BackButton />
          </Header>
        </Flex>
        <Flex w={['90%', null, '70%']} flexDir="column" alignItems="flex-start">
          <Heading size="2xl" py={12}>
            About Me
          </Heading>

          <Flex alignItems="flex-start" w="full">
            <Text fontSize="md">
              Hey, my name is Gabriel Tiso, I'm a software developer and a tech
              lover. I enjoy learning new things every single day, and my main
              objective is to keep building things that bring value to the
              world. I love to use Javascript - although I prefer Typescript -,
              and I'm currently thrilled with NextJs these days. I also love to
              help other people in their problems and doubts related to this
              subjects, so if you want to check my StackOverflow profile, it's
              right{' '}
              <ExternalLink href="https://stackoverflow.com/users/13502073/gabriel-tiso">
                here
              </ExternalLink>
              . If you want to contact me, please reach out to my LinkedIn{' '}
              <ExternalLink href="https://www.linkedin.com/in/gabrieltiso/">
                here
              </ExternalLink>
              , and if you curious to see some of my other projects, feel free
              to follow me on{' '}
              <ExternalLink href="https://github.com/Gabriel2233">
                {' '}
                GitHub
              </ExternalLink>{' '}
              too 😃.
            </Text>
          </Flex>

          <Flex
            w="full"
            alignItems="flex-start"
            justifyContent="center"
            flexDir="column"
          >
            <Heading size="2xl" pt={16}>
              Tech I love
            </Heading>

            <Grid
              pt={8}
              gridTemplateColumns={'repeat(auto-fit, minmax(175px, 1fr))'}
              bg="red"
              maxW={'980px'}
              m={'auto'}
              w={'90%'}
            >
              {TechILove.map((tech) => (
                <TechCard techData={tech} key={tech.path} />
              ))}
            </Grid>
          </Flex>

          <Footer />
        </Flex>
      </Flex>
    </>
  );
};

export default About;
