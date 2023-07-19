import { Box, Button, Heading, Text } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box as="section" className="hero">
      <Box className="intro-text">
        <Heading>
          <Box className="gain">Gain Important Knowledge</Box> <br />
          <Box className="anywhere">Anywhere</Box>
        </Heading>
        <Text>
          An online streaming platform for national geographic content <br />
          We also dedicate some special time to admire big recycle projects
        </Text>
        <Button colorScheme="purple">Learn More</Button>
        <Button colorScheme="blue" ml={4}>
          Subscribe
        </Button>
      </Box>
      <Box className="i-frame">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/S2lmPIa1iWE"
          title="YouTube video player"
          frameBorder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <Box className="stand-1"></Box>
        <Box className="stand-2"></Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
