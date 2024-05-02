import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Box bg="brand.900" color="white" p={4}>
      <Flex justifyContent="space-between" alignItems="center" maxW="container.xl" mx="auto">
        <Box fontSize="xl" fontWeight="bold">
          Apple Farm
        </Box>
        <Flex gap={4}>
          <Link as={RouterLink} to="/#about-us">
            About Us
          </Link>
          <Link as={RouterLink} to="/#our-apples">
            Our Apples
          </Link>
          <Link as={RouterLink} to="/#gallery">
            Gallery
          </Link>
          <Link as={RouterLink} to="/#contact-us">
            Contact Us
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
