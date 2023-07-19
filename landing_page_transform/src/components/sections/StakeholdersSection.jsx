import { Box, Flex, Image, Text } from "@chakra-ui/react";
import changil from "../../assets/images/changil.png";
import jane from "../../assets/images/jane.png";
import john from "../../assets/images/john.png";
const StakeholdersSection = () => {
  return (
    <Box as="section" className="stakeholders" id="stakeholders">
      <Box className="persons">
        <Flex>
          <Box className="person-1">
            <Image src={changil} alt="Changil" />
            <Text className="name">Changil</Text>
            <Text className="role">Founder</Text>
          </Box>
          <Box className="person-2">
            <Image src={jane} alt="Jane Doe" />
            <Text className="name">Jane Doe</Text>
            <Text className="role">MD</Text>
          </Box>
          <Box className="person-3">
            <Image src={john} alt="John Doe JNR" />
            <Text className="name">John Doe JNR</Text>
            <Text className="role">Head Analyst</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default StakeholdersSection;
