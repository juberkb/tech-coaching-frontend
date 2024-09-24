import React from "react";
import { Box, Image, HStack } from "@chakra-ui/react";
import img1 from "../../assets/brand-01.png";
import img2 from "../../assets/brand-02.png";
import img3 from "../../assets/brand-03.png";
import img4 from "../../assets/brand-04.png";
import img5 from "../../assets/brand-05.png";
import img6 from "../../assets/brand-06.png";
import "../../comman/Styles/allStyles.css"
function CustomMove() {
  return (
    <Box
     className="customMoveBg"
      overflow="hidden"
      whiteSpace="nowrap"
      width="100%"
      mt={5}
      position="relative"
    >
      {/* Moving container */}
      <Box
        as="div"
        display="inline-block"
        animation="scroll 20s linear infinite"
        minWidth="100%"
      >
        <HStack spacing={10}>
          <Image src={img1} alt="Brand 1" boxSize={["80px", "120px", "150px"]} />
          <Image src={img2} alt="Brand 2" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img3} alt="Brand 3" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img4} alt="Brand 4" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img5} alt="Brand 5" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img6} alt="Brand 6" boxSize={["80px", "120px", "150px"]}  />
          {/* <Image src={img1} alt="Brand 1" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img2} alt="Brand 2" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img3} alt="Brand 3" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img4} alt="Brand 4" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img5} alt="Brand 5" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img6} alt="Brand 6" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img1} alt="Brand 1" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img2} alt="Brand 2" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img3} alt="Brand 3" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img4} alt="Brand 4" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img5} alt="Brand 5" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img6} alt="Brand 6" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img1} alt="Brand 1" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img2} alt="Brand 2" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img3} alt="Brand 3" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img4} alt="Brand 4" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img5} alt="Brand 5" boxSize={["80px", "120px", "150px"]}  />
          <Image src={img6} alt="Brand 6" boxSize={["80px", "120px", "150px"]}  /> */}
        </HStack>
      </Box>
    </Box>
  );
}

export default CustomMove;