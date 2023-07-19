import { Box, Icon, Image } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import upChevronImage from "../../assets/icons/up-chevron.png";

const ScrollToTopButton = () => {
  return (
    <Box className="scroll-up" id="scroll-up">
      <Image src={upChevronImage} className="socicon up-arrow" alt="up-arrow" />
      <Icon as={ChevronUpIcon} />
    </Box>
  );
};

export default ScrollToTopButton;
