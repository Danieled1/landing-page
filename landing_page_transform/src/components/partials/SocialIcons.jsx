import { Box, Heading, Icon, Link, HStack } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <Box as="section" className="social">
      <Heading size="md">Connect with us on Social Media</Heading>
      <HStack spacing={4}>
        <Link href="#">
          <Icon as={FaTwitter} />
        </Link>
        <Link href="#">
          <Icon as={FaInstagram} />
        </Link>
        <Link href="#">
          <Icon as={FaFacebook} />
        </Link>
      </HStack>
    </Box>
  );
};

export default SocialIcons;
