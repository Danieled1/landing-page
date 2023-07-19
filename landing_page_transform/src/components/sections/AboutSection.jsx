import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box as="section" className="about" id="about">
      <Heading size="md">Watch the Flix</Heading>
      <Text>
        Our primary objective is to share green projects/ideas and knowledge to
        every person around the world
      </Text>
      <Heading size="md">It's not About the Projects Alone!</Heading>
      <Text>
        We also air documentaries specially made for amazing projects, green
        lifestyle, news, and more.
      </Text>
    </Box>
  );
};

export default AboutSection;
