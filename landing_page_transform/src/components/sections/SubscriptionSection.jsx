import { Box, Heading, Input, Button } from "@chakra-ui/react";

const SubscriptionSection = () => {
  return (
    <Box as="section" className="sub" id="sub">
      <Heading size="md">Subscribe to our newsletter for updates</Heading>
      <form action="#">
        <Input
          type="email"
          name="email"
          id="email-sub"
          className="email-sub"
          required
        />
        <Button colorScheme="purple" type="submit">
          Subscribe
        </Button>
      </form>
    </Box>
  );
};

export default SubscriptionSection;
