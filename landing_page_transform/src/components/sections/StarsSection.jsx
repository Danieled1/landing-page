import { Box, Image } from "@chakra-ui/react";
import altaWindImage from "../../assets/images/wind.jpg";
import itaipuDamImage from "../../assets/images/dam.jpg";
import theGeysersImage from "../../assets/images/the_geysers.png";
import geothermalPowerImage from "../../assets/images/geo.jpg";

const StarsSection = () => {
  return (
    <Box as="section" className="stars" id="stars">
      <Box className="stars-gallery">
        <a href={altaWindImage} className="big">
          <Image
            src={altaWindImage}
            alt="photo of Alta wind energy center"
            title="Alta Wind Energy Center"
          />
        </a>
        <a href={itaipuDamImage} className="big">
          <Image
            src={itaipuDamImage}
            alt="photo of Itaipu dam"
            title="Itaipu Dam"
          />
        </a>
        <a href={theGeysersImage} className="big">
          <Image
            src={theGeysersImage}
            alt="photo of The Geysers"
            title="The Geysers"
          />
        </a>
        <a href={geothermalPowerImage} className="big">
          <Image
            src={geothermalPowerImage}
            alt="photo of Geothermal power station"
            title="Cerro Prieto Geothermal Power Station"
          />
        </a>
        <a
          href="https://i.ytimg.com/vi/8m0IAy8jjLY/maxresdefault.jpg"
          className="big"
        >
          <Image
            src="https://i.ytimg.com/vi/8m0IAy8jjLY/maxresdefault.jpg"
            alt="Bhadla Solar Park"
            title="Bhadla Solar Park"
          />
        </a>
      </Box>
    </Box>
  );
};

export default StarsSection;
