// Complete the Index page component for an apple farm website
import { Box, Container, Flex, Heading, Image, Link, Text, VStack, SimpleGrid, Input, Textarea, Button } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center">
        <Image src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGZhcm0lMjBOb3J3YXl8ZW58MHx8fHwxNzE0NjgwODQyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Apple Farm" boxSize="100%" objectFit="cover" />
        <Heading as="h1" size="2xl" mt={5}>
          Welcome to Our Apple Farm
        </Heading>
        <Text fontSize="xl" mt={2}>
          Discover the taste of Norway's finest apples.
        </Text>
      </Flex>

      <Container maxW="container.xl" mt={10}>
        <VStack spacing={10}>
          <Box id="about-us">
            <Heading as="h2" size="xl">
              About Us
            </Heading>
            <Text mt={4}>Nestled in the heart of Norway, our apple farm has been a family-owned gem since 1950. We are dedicated to growing the finest varieties of apples, each nurtured to perfection. Our unique climate and rich soil contribute to the distinctive flavors of our produce.</Text>
          </Box>

          <Box id="our-apples">
            <Heading as="h2" size="xl">
              Our Apples
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={4}>
              <Box>
                <Heading as="h3" size="lg">
                  Summerred
                </Heading>
                <Text>Sweet and slightly tart, perfect for a fresh summer pie. Harvest: August.</Text>
              </Box>
              <Box>
                <Heading as="h3" size="lg">
                  Honeycrisp
                </Heading>
                <Text>Crisp and juicy with a honey-like sweetness. Harvest: September.</Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box id="gallery">
            <Heading as="h2" size="xl">
              Gallery
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mt={4}>
              <Image src="https://images.unsplash.com/photo-1607358049845-4360f06be5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMG9yY2hhcmR8ZW58MHx8fHwxNzE0NjgwODQyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Orchard" />
              <Image src="https://images.unsplash.com/photo-1617235178117-a1f5fecb72bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGhhcnZlc3R8ZW58MHx8fHwxNzE0NjgwODQzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Harvest" />
              <Image src="https://images.unsplash.com/photo-1634429001369-9bba712fffe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGZhcm0lMjBzY2VuaWN8ZW58MHx8fHwxNzE0NjgwODQzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Scenic View" />
            </SimpleGrid>
          </Box>

          <Box id="contact-us">
            <Heading as="h2" size="xl">
              Contact Us
            </Heading>
            <VStack spacing={3} mt={4}>
              <Flex align="center">
                <FaMapMarkerAlt />
                <Text ml={2}>123 Apple Lane, Norway</Text>
              </Flex>
              <Flex align="center">
                <FaPhone />
                <Text ml={2}>+47 123 456 789</Text>
              </Flex>
              <Flex align="center">
                <FaEnvelope />
                <Text ml={2}>contact@applefarm.no</Text>
              </Flex>
              <Flex align="center">
                <FaInstagram />
                <Link href="https://instagram.com" isExternal ml={2}>
                  @applefarm
                </Link>
              </Flex>
              <Flex align="center">
                <FaFacebookSquare />
                <Link href="https://facebook.com" isExternal ml={2}>
                  Apple Farm
                </Link>
              </Flex>
              <Box as="form" w="100%" mt={5}>
                <Input placeholder="Your Name" mb={3} />
                <Input placeholder="Your Email" mb={3} />
                <Textarea placeholder="Your Message" mb={3} />
                <Button colorScheme="teal">Send Message</Button>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
