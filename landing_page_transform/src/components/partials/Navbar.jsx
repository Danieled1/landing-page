import { Box, Flex, Heading, Icon, Link, Switch } from "@chakra-ui/react";
import { MoonIcon, SunIcon, StarIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" py={4}>
      <Link href="#" className="logo">
        <Heading>
          <Box className="flix">Flix</Box>
          <Box className="tv">TV</Box>
          <Icon className="star" as={StarIcon} />
        </Heading>
      </Link>
      <Flex align="center">
        {/* Dark/light theme switcher */}
        <Switch id="checkbox" size="lg" mr={2} />
        <Icon as={SunIcon} className="sun" />
        <Icon as={MoonIcon} className="moon" />
        <Box className="switcher"></Box>
      </Flex>
      <Flex>
        <Link href="#about" className="nav-link" id="nav-link">
          About
        </Link>
        <Link href="#stars" className="nav-link" id="nav-link">
          Green Stars
        </Link>
        <Link href="#stakeholders" className="nav-link" id="nav-link">
          Stakeholders
        </Link>
        <Link href="#sub" className="nav-link" id="nav-link">
          Subscribe
        </Link>
      </Flex>
      <Box className="hamburger" id="hamburger">
        <Box className="bar"></Box>
        <Box className="bar"></Box>
        <Box className="bar"></Box>
      </Box>
    </Flex>
  );
};

export default Navbar;
